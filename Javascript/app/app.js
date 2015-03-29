///////////////////////////////////////////////////////////////////////////////
//
//  @class      : SMC
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
    var Radio       = require('backbone.radio');
    var Router      = require('router');
    var SyncShim    = require('backbone.sync.shim');

    // @modules
    var Layout      = require('layout');
    var Inbox       = require('inbox/index');

    // CLASS //////////////////////////////////////////////////////////////////
    var SMC         = Marionette.Application.extend(function(){

        console.log('%s v%s', Config.name, Config.version);

        // @private
        var _this;
        var _router;
        var _layout;

        // INIT ////////////////////////////////////////////////////////////////
        function initialize(){
            console.log('SMC::initialize');

            // assign context
            _this               = this;

            // assign configurations
            Radio.DEBUG         = Config.Debug;

            Backbone.origSync   = Backbone.sync;
            Backbone.sync       = SyncShim;

            // assign globals 
            _this.utility       = Utility;
            _this.config        = Config;
            _this.const         = Const;

            _router             = new Router();
            _this.rootView      = new Layout();

            assembleModules();
            addEventHandlers();

        }

        /*
            register and instantiate app modules
            these have some built-in methods such as start/stop
        */
        function assembleModules(){

            _this.module('inbox', Inbox);
        }

        /*
            listen for application events. 
            note we're not calling app methods directly
        */
        function addEventHandlers(){

            /*_this.on('start', function(){
                if(Backbone.history){
                    Backbone.history.start();
                }
            });*/
        }

        function start(){
            console.log('SMC::start');

            if(Backbone.history){
                Backbone.history.start();
            }
        }

        return {
            initialize: initialize,
            start : start
        }

    }());

    // Export /////////////////////////////////////////////////////////////////
	return SMC;

});