define([
], function(
){

    var thisRouter = Backbone.Router.extend({
        routes: {
            'test/:id': 'test'
        },

        loadView: function (currentView) {
            this.currentView && (this.currentView.close ? this.currentView.close() : this.currentView.remove());
            this.currentView = currentView;
        },

        test: function (id) {
            alert(id);
        }

        
    });

    return thisRouter;

});