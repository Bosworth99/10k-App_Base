///////////////////////////////////////////////////////////////////////////////
//
//  @class      : App
//  @comment    : instantiate application core and apply static resources to the global app
//
///////////////////////////////////////////////////////////////////////////////
define(function(require){
    "use strict";

    // @globals
    var Utility     = require('utility');
    var Config      = require('config');
    var Const       = require('const');

    // @imports
    var Backbone    = require('backbone');
    var Marionette  = require('backbone.marionette');
    var Router      = require('router');
    var Inbox       = require('inbox/index');

    var Radio       = require('backbone.radio');

    // CLASS //////////////////////////////////////////////////////////////////
    var SMC         = Marionette.Application.extend(function(){

        var _inbox;
        var _dispatcher;
        var _router;

        // INIT ////////////////////////////////////////////////////////////////
        function initialize(){
            console.log('SMC::initialize');

            // assign globals 
            this.Utility    = Utility;
            this.Config     = Config;
            this.Const      = Const;

            _router         = Router;
            _dispatcher     = Radio.channel('dispatcher');

            _inbox          = new Inbox();
            _inbox.init();
        }

        function start(){


            if(Backbone.history){
                Backbone.history.start();
            }
        }

        return {
            initialize: initialize,
            start : start,
            stop : stop
        }

    }());

    // Export /////////////////////////////////////////////////////////////////
	return SMC;

});