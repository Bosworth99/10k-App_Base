///////////////////////////////////////////////////////////////////////////
//
//  @package    : SMC
//  @class      : App_Core
// 	@comment	: control the instantiation and lifecycle of all app modules 
//
///////////////////////////////////////////////////////////////////////////

define(function(require){

	// INCLUDES ///////////////////////////////////////////////////////////////
	var Marionette 	= require('backbone.marionette');
	var App_Router  = require('app/router');


    // CLASS //////////////////////////////////////////////////////////////////
    var App_Core = function(){

    	// module instances 
    	var _router;


    	function init(){
    		console.log('App_Core::init');

    		_router     = new App_Router();



    	}
   		
    	return {
    		init : init
    	}
	};
    
    // EXPORT /////////////////////////////////////////////////////////////////
	return App_Core;

});