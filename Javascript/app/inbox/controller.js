///////////////////////////////////////////////////////////////////////////
//
//  @class      : Inbox_Controller
// 	@comment	: 
//
///////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

	// @imports
    var Marionette          = require('backbone.marionette');
	var Radio               = require('backbone.radio');

    // @components
    var Inbox_Store         = require('inbox/store');
    var Inbox_View          = require('inbox/view');

    // CLASS //////////////////////////////////////////////////////////////////
    var Inbox_Controller = Marionette.Object.extend(function(){

    	// @private
        var _this;
        var _dispatcher;
        var _store;
        var _view;

    	function initialize(){
    		console.log('Inbox_Controller::initialize');

            _this           = this;
            _dispatcher     = Radio.channel('dispatcher');

            // module components
            _store          = new Inbox_Store();
            _view           = new Inbox_View({model:_store});
            
            addEventHandlers();
    	}
   		
        function addEventHandlers(){

            _dispatcher.on('app:route:inbox', show );
        }

        function start(){
            console.log('Inbox_Controller::start');
        }

        function show(){
            console.log('Inbox_Controller::show');

            _view.render();
        }

    	return {
            initialize : initialize,
            start : start
    	}
        
	}());

    // EXPORT /////////////////////////////////////////////////////////////////
	return Inbox_Controller;

});