///////////////////////////////////////////////////////////////////////////////
//
//  @class      : Core
// 	@comment	: control the instantiation and lifecycle of all app modules 
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

	// INCLUDES ///////////////////////////////////////////////////////////////
	var Marionette 	= require('backbone.marionette');
	var Router  	= require('router');
	var Inbox 		= require('inbox/index')

    // CLASS //////////////////////////////////////////////////////////////////
    var Core = function(){

    	var SMC;
    	var _inbox;

		function init(){
			console.log('Core::init SMC:%o', SMC);

			SMC = new Marionette.Application();

			_inbox = SMC.module('inbox');

		}
			


		function start(){

			SMC.start();
		}


		return {
			init : init,
			start : start,
			stop : stop
		}

	};
    
    // EXPORT /////////////////////////////////////////////////////////////////
	return Core;

});