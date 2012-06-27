var Karmr = Karmr || {};

( function( Karmr ) { 

	$( document ).ready( function( e ) {

	    Karmr.websocket = Karmr.websocket || {};
	    Karmr.protocol = 'http';
	    Karmr.domain = 'localhost:5000';
	    Karmr.socket = io.connect( Karmr.protocol + '://' + Karmr.domain );
	    Karmr.accounts = new Accounts( Karmr.socket );

	    /* Karmr */


		Karmr.accounts.subscribe( 'sessioning', function( data ) {
			console.log("SESSIONING",data)
		} );


		Karmr.accounts.subscribe( 'sessioned', function( data ) {
			console.log("sessioned",data)
		    Karmr.profiles.update();
		} );

		Karmr.accounts.subscribe( 'unsessioned', function( data ) {
			console.log("unsessioned",data)
		    Karmr.profiles.update();
		} );

		Karmr.accounts.subscribe( 'profile', function( data ) {
			console.log("PROFILE",data);
		} );

		/* Socket */

		Karmr.socket.on('api',function(data) {
			console.log("api",JSON.stringify(data));
		});

		Karmr.socket.on('connect',function(data) {
			console.log("CONNECTED",data);
		});

		Karmr.socket.on('disconnect',function() {
			console.log("DISCONNECTED");
		});



	} );

}( Karmr ) );