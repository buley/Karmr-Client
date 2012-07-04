Karmr = ( _namespace, callback ) ->

  _namespace = _namespace || {}
  _namespace.websocket = _namespace.websocket or {}
  _namespace.protocol = window.location.protocol
  _namespace.domain = window.location.host
  _namespace.socket = io.connect( _namespace.protocol + "//" + _namespace.domain )

  _namespace.socket.on "api", (data) ->
    console.log "api", JSON.stringify(data)

  _namespace.socket.on "connect", (data) ->

    console.log "CONNECTED", data

    _namespace.accounts = new Accounts(_namespace.socket)
    callback.apply( @, _namespace.accounts )

    _namespace.accounts.subscribe "sessioning", ( data ) ->
      console.log "SESSIONING", data

    _namespace.accounts.subscribe "sessioned", ( data ) ->
      console.log "SESSIONED", data

    _namespace.accounts.subscribe "unsessioned", ( data ) ->
      console.log "UNSESSIONED", data

    _namespace.accounts.subscribe "profile", ( data ) ->
      console.log "PROFILE", data

  _namespace.socket.on "disconnect", ->
    console.log "DISCONNECTED"

  _namespace
