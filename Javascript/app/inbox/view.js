///////////////////////////////////////////////////////////////////////////////
//
//  @class      : Inbox_View
//  @comment    : 
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

    // INCLUDES ///////////////////////////////////////////////////////////////
    var Marionette  = require('backbone.marionette');
    var Radio       = require('backbone.radio');

    // CLASS //////////////////////////////////////////////////////////////////
    var Inbox_View = Marionette.View.extend( function(){

        // @private
        var _self;
        var _dispatcher;

        function initialize(){
            console.log('Inbox_View::initialize');

            _self       = this;
            _dispatcher = Radio.channel('dispatcher');
        }

        return {
            initialize : initialize
        };

    }());

    // EXPORT /////////////////////////////////////////////////////////////////
    return Inbox_View;
});