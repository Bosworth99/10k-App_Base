var app = (typeof app !== "undefined") ? app : {};

//now load some modules
require.config({
    urlArgs: "v=" + (new Date()).getTime(),
    baseUrl: "javascript",
    paths: {
        jquery: "vendor/jquery/dist/jquery",
        backbone: "vendor/backbone/backbone",
        underscore: "vendor/underscore/underscore",
        momentjs: "vendor/momentjs/moment",
        underscorestring: "vendor/underscore.string/dist/underscore.string",
        "backbone.babysitter": "vendor/backbone.babysitter/lib/backbone.babysitter",
        "backbone.radio": "vendor/backbone.radio/src/backbone.radio",
        "backbone.marionette": "vendor/marionette/lib/backbone.marionette",
        "backbone.sync.shim": "vendor/orca-lni-utils-backbone-sync-shim/backbone.sync.shim",
    },
    map: {},
    shim: {},
    packages: [],
});

require([], function(){
    
    console.log('index.js app %o', app);

});