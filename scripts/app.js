/*
* @file app.js
* @author Isaac Jessup
*
* Code for the application layer. The app is divided into
* separate objects for the application logic (the app object)
* and the user interface (the app.ui object).
*/

/**
 * Application layer (non-UI code).
 */
var app = (function()
{
	var app = {};
	var dataURL = "http://dev.cloud5studios.com/tools/packages/roku_channels/";

	/**
	 * Downloads categories.
	 */
	app.getCatagories = function( type, callbackFun ) {		
		// Do AJAX call to get an array of categories.
		$.getJSON(dataURL + "categories", {'type' : type})
		.done( function(data) {
			callbackFun(type, data);
		})
		.error( function( err ) {
			alert( err.status );
		});
	};
	/**
	 * Downloads channels.
	 */
	app.getChannels = function( catID, callbackFun ) {		
		// Do AJAX call to get an array of channels.
		$.getJSON(dataURL + "channels", {'category' : catID})
		.done( function(data) {
			callbackFun(data);
		})
		.error( function( err ) {
			alert( err.status );
		});
	};
	/**
	 * Downloads channel.
	 */
	app.getChannel = function( chanID, callbackFun ) {		
		// Do AJAX call to get an array of channels.
		$.getJSON(dataURL + "channels", {'channel' : chanID})
		.done( function(data) {
			callbackFun(data);
		})
		.error( function( err ) {
			alert( err.status );
		});
	};
	
	return app;
})();