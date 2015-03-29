///////////////////////////////////////////////////////////////////////////////
//
//  @class      : Router
//  @comment    : Wire up all navigation events
//                handle all callbacks as dispatcher events
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

    // @imports
    var Backbone    = require('backbone');
    var Marionette  = require('backbone.marionette');
    var Radio       = require('backbone.radio');

    // CLASS //////////////////////////////////////////////////////////////////
    var Router      = Marionette.AppRouter.extend( function(){

        // @private
        var _this;
        var _dispatcher;

        // @const
        var ROUTES = {
            ""      : start,
            "inbox" : inbox
        };

        function initialize(){
            console.log('Router::initialize', this);

            _this       = this;
            _dispatcher = Radio.channel('dispatcher');
        }

        function start(){
            console.log('Router::start');

            _this.navigate("inbox", {trigger:true});
        }

        function inbox(){
            console.log('Router::inbox');      

            _dispatcher.trigger('app:route:inbox');
        }

        return {
            initialize  : initialize,
            routes      : ROUTES
        };

    }());

    // EXPORT /////////////////////////////////////////////////////////////////
    return Router;
});