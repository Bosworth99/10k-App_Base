///////////////////////////////////////////////////////////////////////////
//
//  @package    : SMC
//  @class      : Inbox_Index
// 	@comment	: control the instantiation and lifecycle of Inbox module 
//
///////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

	// INCLUDES ///////////////////////////////////////////////////////////////
    var Marionette          = require('backbone.marionette');
	var Radio               = require('backbone.radio');
    
    var Inbox_Controller    = require('inbox/controller');

    // CLASS //////////////////////////////////////////////////////////////////
    var Inbox_Index         = Marionette.Module.extend(function(){

    	// @private
        var _self;
        var _dispatcher;
        var _controller;
        var _store;
        var _view;

    	function initialize(){
    		console.log('Inbox_Index::initialize');

            _self           = this;
            _dispatcher     = Radio.channel('dispatcher');

            // instance components
            _controller     = new Inbox_Controller();
    	}
   		
        function start(){
            _dispatcher.trigger('module:inbox:start');
            _controller.start();
        }

    	return {
            initialize : initialize,
            start : start
    	}
	}());

    // EXPORT /////////////////////////////////////////////////////////////////
	return Inbox_Index;

});