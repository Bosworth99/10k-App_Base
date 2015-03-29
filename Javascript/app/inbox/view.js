///////////////////////////////////////////////////////////////////////////////
//
//  @class      : Inbox_View
//  @comment    : 
//
///////////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

    // @imports
    var $           = require('jquery')
    var _           = require('underscore');    
    var Marionette  = require('backbone.marionette');
    var Radio       = require('backbone.radio');

    // @templates
    var Template =  '<div id="foobar"><%= foobar %></div>';

    // CLASS //////////////////////////////////////////////////////////////////
    var Inbox_View  = Marionette.ItemView.extend( function(){

        // @private
        var _this;
        var _dispatcher;
        var _model;

        function initialize(params){
            console.log('Inbox_View::initialize', this, params );

            _this       = this;
            _dispatcher = Radio.channel('dispatcher');

            _model      = params.model;

            _dispatcher.trigger('region:show:inbox',{
                view : _this
            });
        }

        function events(){
            return{
                'click #foobar' : function(e){ console.log('you clicked ', $(e.currentTarget) ); }
            }
        }

        function template(){

            var d = _model.get('foobar');

            return _.template( Template, {foobar:d} );
        }

        return {
            initialize  : initialize,
            template    : template,
            events      : events
        };  

    }());

    // EXPORT /////////////////////////////////////////////////////////////////
    return Inbox_View;
});