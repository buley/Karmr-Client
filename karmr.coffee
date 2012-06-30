( ( Karmr ) ->

  Karmr = Karmr || {}
  Karmr.websocket = Karmr.websocket or {}
  Karmr.protocol = window.location.protocol
  Karmr.domain = window.location.host
  Karmr.socket = io.connect( Karmr.protocol + "//" + Karmr.domain )

  Karmr.socket.on "api", (data) ->
    console.log "api", JSON.stringify(data)

  Karmr.socket.on "connect", (data) ->

    console.log "CONNECTED", data

    Karmr.accounts = new Accounts(Karmr.socket)

    Karmr.accounts.subscribe "sessioning", ( data ) ->
      console.log "SESSIONING", data

    Karmr.accounts.subscribe "sessioned", ( data ) ->
      console.log "SESSIONED", data

    Karmr.accounts.subscribe "unsessioned", ( data ) ->
      console.log "UNSESSIONED", data

    Karmr.accounts.subscribe "profile", ( data ) ->
      console.log "PROFILE", data

  Karmr.socket.on "disconnect", ->
    console.log "DISCONNECTED"

) Karmr or {}
