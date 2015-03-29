///////////////////////////////////////////////////////////////////////////////
//
//  @class      : Layout
//  @comment    : Singleton instance of the router class
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

    // @imports
    var Marionette  = require('backbone.marionette');
    var Radio       = require('backbone.radio');

    // CLASS //////////////////////////////////////////////////////////////////
    var Layout      = Marionette.RegionManager.extend( function(){

        // @private
        var _this;
        var _dispatcher;

        // @const
        var REGIONS = {
            'appRegion'     : '#SMC',
            'navRegion'     : '#nav-wrapper',
            'contentRegion' : '#content-wrapper',
            'inboxRegion'   : '#inbox',
            'draftsRegion'  : '#drafts',
            'trashRegion'   : '#trash',
            'messageRegion' : '#createMessage',
            'threadRegion'  : '#viewThread'
        }

        function initialize(){
            console.log('Layout::init %o');

            _this           = this;
            _dispatcher     = Radio.channel('dispatcher');

            addEventHandlers();
        }

        function addEventHandlers(){

            _dispatcher.on('region:show:inbox', function(payload){          
                _this.get('inboxRegion').show(payload.view);
            });

            _dispatcher.on('region:show:drafts', function(payload){          
                _this.get('draftsRegion').show(payload.view);
            });            

        }

        return {
            initialize  : initialize,
            regions     : REGIONS
        };

    }());

    // EXPORT /////////////////////////////////////////////////////////////////
    return Layout;
});