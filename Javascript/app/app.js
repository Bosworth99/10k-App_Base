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
    var Radio       = require('backbone.radio');

    // @modules
    var Inbox       = require('inbox/index');


    // CLASS //////////////////////////////////////////////////////////////////
    var SMC         = Marionette.Application.extend(function(){

        console.log('%s v%s', Config.name, Config.version);
        
        // @private
        var _self;
        var _dispatcher;
        var _router;

        // INIT ////////////////////////////////////////////////////////////////
        function initialize(){
            console.log('SMC::initialize');

            // assign context
            _self           = this;

            // assign configurations
            Radio.DEBUG     = Config.Debug;

            // assign globals 
            _self.utility   = Utility;
            _self.config    = Config;
            _self.const     = Const;

            _router         = Router;
            _dispatcher     = Radio.channel('dispatcher');

            addEventHandlers();
            assembleModules();
        }

        /*
            SMC global events
        */
        function addEventHandlers(){

            /*_self.listenTo(_dispatcher, 'module:inbox:start', function(){ 
                console.log('module:inbox:start captured'); 
            });*/
        }

        /*
            once configs and events have been set, instantiate app modules
        */
        function assembleModules(){

            _self.module('inbox', Inbox);

        }

        function start(){

            console.log('SMC::start');

            _self.module('inbox', Inbox).start();

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