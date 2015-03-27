///////////////////////////////////////////////////////////////////////////////
//
//  @package    : SMC
//  @author     : josh@joshbosworth.com
//  @comment    : 
//      - define dependancies
//      - configure require 
//      - shim DOM accessible frameworks
//      - invoke application
//
///////////////////////////////////////////////////////////////////////////////

(function() {
    "use strict";

    // Namespace
    var app = window.app || {};    

    // FRAMEWORKS  ////////////////////////////////////////////////////////////
    if (window.jQuery) {
        define('jquery', [], function () { return window.jQuery; });
    } else {
        require.config({
            paths: {
                'jquery':     'vendor/jquery/dist/jquery.min'
            },
            shim: {
                'jquery':     { exports: '$' }
            }
        });
    }

    if (window._) {
        define('underscore', [], function () { return window._; });
    } else {
        require.config({
            paths: {
                'underscore': 'vendor/underscore/underscore'
            },
            shim: {
                'underscore': { exports: '_' }
            }
        });
    }

    if (window.Backbone) {
        define('backbone', [], function () { return window.Backbone; });
    } else {
        require.config({
            paths: {
                'backbone': 'vendor/backbone/backbone'
            },
            deps    : [ "jquery", "underscore" ],
            shim: {
                'backbone': { exports: 'Backbone' }
            }
        });
    }

    // REQUIRE MODULES  ///////////////////////////////////////////////////////////////
    require.config({
        urlArgs: "v=" + (new Date()).getTime(),
        baseUrl: "javascript/app",
        paths: {
            "momentjs": "../vendor/momentjs/moment",
            "underscorestring": "../vendor/underscore.string/dist/underscore.string",
            "backbone.babysitter": "../vendor/backbone.babysitter/lib/backbone.babysitter",
            "backbone.radio": "../vendor/backbone.radio/build/backbone.radio",
            "backbone.marionette": "../vendor/marionette/lib/backbone.marionette",
            "backbone.sync.shim": "../endor/orca-lni-utils-backbone-sync-shim/backbone.sync.shim",
        },
        map: {        
            '*': {
            'backbone.wreqr': 'backbone.radio'
        }},
        shim: {        
            momentjs: {
            exports: 'MomentJs'
            }
        },
    });

    // INVOKE APPLICATION  ///////////////////////////////////////////////////////////////
    define(function(require){

        // @imports
        var $   = require('jquery');    
        var SMC = require('app');

        // on ready
        $(function() {

            var _smc = new SMC();
            _smc.start();

            // assign app to global obj
            app = _smc;
        });
    });

})();