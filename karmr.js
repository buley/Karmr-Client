	var Karmr = Karmr || {};
	Karmr.websocket = Karmr.websocket || {};
	Karmr.domain = 'api.Karmr.com';
	Karmr.socket = io.connect( 'https://' + Karmr.domain );

	Karmr.accounts = new Accounts( Karmr.socket );

	Karmr.accounts.subscribe( 'sessioned', function( data ) {
	    Karmr.profiles.update();
	} );

	Karmr.accounts.subscribe( 'unsessioned', function( data ) {
	    Karmr.profiles.update();
	} );


	Karmr.accounts.subscribe( 'profile', function( data ) {
		console.log("PROFILE",data);
	} );

	Karmr.socket.on('api',function(data) {
		console.log("api",JSON.stringify(data));
	});

	Karmr.socket.on('connect',function() {
		console.log("CONNECTED");
	});

	Karmr.socket.on('disconnect',function() {
		console.log("DISCONNECTED");
	});


