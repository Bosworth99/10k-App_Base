var app = app || {};

    //now load some modules
    require.config({
        urlArgs: "v=" + (new Date()).getTime(),//***************************************** remove later
        baseUrl: "../Javascript"
    });

require([
    'routers/mainRouter.js'
], function(
    MainRouter
){

    //this is a master controller for a page
    var thisController = Backbone.View.extend({
        initialize: function () {



           
            //start the router after all modules
            app.mainRouter = new MainRouter;
            Backbone.history.start();
        }
        });

        var controller = new thisController;

    });


