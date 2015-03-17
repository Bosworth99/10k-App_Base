define([,
	'views/testView.js'
], function(
	TestView
){

    var thisRouter = Backbone.Router.extend({
        routes: {
            'test/:id': 'test'
        },

        test: function (id) {
            alert(id);
        }

        
    });

    return thisRouter;

});