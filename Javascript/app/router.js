///////////////////////////////////////////////////////////////////////////////
//
//  @class      : Router
//  @comment    : Singleton instance of the router class
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

    // INCLUDES ///////////////////////////////////////////////////////////////
    var Marionette  = require('backbone.marionette');
    var Radio       = require('backbone.radio');

    // CLASS //////////////////////////////////////////////////////////////////
    var Router = Marionette.AppRouter.extend( function(){

        // @private
        var _dispatcher;
        var _routes;

        function initialize(){
            console.log('Router::init');

            _dispatcher = Radio.channel('dispatcher');
            _routes = {};
        }

        return {
            initialize : initialize
        };

    }());

    // EXPORT /////////////////////////////////////////////////////////////////
    return (Router)? Router : new Router();
});