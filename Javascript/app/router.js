///////////////////////////////////////////////////////////////////////////////
//
//  @class      : App_Router
//  @comment    : 
//
///////////////////////////////////////////////////////////////////////////////

define(function(){
    "use strict";

    // INCLUDES ///////////////////////////////////////////////////////////////
    var Marionette  = require('backbone.marionette');
    var Radio       = require('backbone.radio');

    // CLASS //////////////////////////////////////////////////////////////////
    var App_Router = Marionette.AppRouter.extend( function(){

        // PRIVATE
        var _dispatcher;
        var _routes;

        function init(){
            console.log('App_Router::init');

            _dispatcher = Radio.channel('dispatcher');
            _routes = {};
        }

        return {
            init:init
        };

    });

    // EXPORT /////////////////////////////////////////////////////////////////
    return App_Router;
});