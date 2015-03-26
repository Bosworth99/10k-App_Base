///////////////////////////////////////////////////////////////////////////////
//
//  @class      : Router
//  @comment    : 
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

    // INCLUDES ///////////////////////////////////////////////////////////////
    var Marionette  = require('backbone.marionette');
    var Radio       = require('backbone.radio');

    // CLASS //////////////////////////////////////////////////////////////////
    var Router = new Marionette.AppRouter.extend( function(){

        // PRIVATE
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
    return Router;
});