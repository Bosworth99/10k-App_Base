///////////////////////////////////////////////////////////////////////////
//
//  @class      : Inbox_Index
// 	@comment	: control the instantiation and lifecycle of Inbox module 
//
///////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

	// @imports
    var Marionette          = require('backbone.marionette');
	var Radio               = require('backbone.radio');

    // @components    
    var Inbox_Controller    = require('inbox/controller');

    // CLASS //////////////////////////////////////////////////////////////////
    var Inbox_Index         = Marionette.Module.extend(function(){

    	// @private
        var _this;
        var _dispatcher;
        var _controller;
        var _view;

    	function initialize(){
    		console.log('Inbox_Index::initialize', this );

            _this           = this;
            _dispatcher     = Radio.channel('dispatcher');

            // instance components
            _controller     = new Inbox_Controller();            
    	}

        function start(){
            console.log('Inbox_Index::start');

            _controller.start();
        }

        function stop(){
            console.log('Inbox_Index::stop');

            _controller.stop();
        }

    	return {
            initialize : initialize,
            start : start,
            stop : stop
    	}
        
	}());

    // EXPORT /////////////////////////////////////////////////////////////////
	return Inbox_Index;

});