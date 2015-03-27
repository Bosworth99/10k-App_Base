///////////////////////////////////////////////////////////////////////////
//
//  @package    : SMC
//  @class      : Inbox_Controller
// 	@comment	: 
//
///////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

	// INCLUDES ///////////////////////////////////////////////////////////////
    var Marionette          = require('backbone.marionette');
	var Radio               = require('backbone.radio');
    
    var Inbox_Store         = require('inbox/store');
    var Inbox_View          = require('inbox/view');

    // CLASS //////////////////////////////////////////////////////////////////
    var Inbox_Controller = Marionette.Object.extend(function(){

    	// @private
        var _self;
        var _dispatcher;
        var _store;
        var _view;

    	function initialize(){
    		console.log('Inbox_Controller::initialize');

            _self           = this;
            _dispatcher     = Radio.channel('dispatcher');

            // module components
            _store          = new Inbox_Store();
            _view           = new Inbox_View();
    	}
   		
        function start(){
            console.log('Inbox_Controller::start');
        }

    	return {
            initialize : initialize,
            start : start
    	}
	}());

    // EXPORT /////////////////////////////////////////////////////////////////
	return Inbox_Controller;

});