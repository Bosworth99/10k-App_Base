///////////////////////////////////////////////////////////////////////////////
//
//  @class      : Inbox_Store
//  @comment    : 
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

    // @imports
    var Backbone    = require('backbone');
    var Radio       = require('backbone.radio');

    // CLASS //////////////////////////////////////////////////////////////////
    var Inbox_Store = Backbone.Model.extend( function(){

        // @private
        var _this;
        var _dispatcher;

        function initialize(){
            console.log('Inbox_Store::initialize');

            _this       = this;
            _dispatcher = Radio.channel('dispatcher');

            getData();
        }

        function getData(){
            
            _this.set({
                'foobar':'barfoo'
            });
        }

        return {
            initialize : initialize
        };

    }());

    // EXPORT /////////////////////////////////////////////////////////////////
    return Inbox_Store;
});