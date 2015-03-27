///////////////////////////////////////////////////////////////////////////////
//
//  @class      : Inbox_Store
//  @comment    : 
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

    // INCLUDES ///////////////////////////////////////////////////////////////
    var Backbone    = require('backbone');
    var Radio       = require('backbone.radio');

    // CLASS //////////////////////////////////////////////////////////////////
    var Inbox_Store = Backbone.Model.extend( function(){

        // @private
        var _self;
        var _dispatcher;

        function initialize(){
            console.log('Inbox_Store::initialize');

            _self       = this;
            _dispatcher = Radio.channel('dispatcher');
        }

        return {
            initialize : initialize
        };

    }());

    // EXPORT /////////////////////////////////////////////////////////////////
    return Inbox_Store;
});