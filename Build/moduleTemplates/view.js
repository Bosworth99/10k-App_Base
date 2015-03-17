define([
    'requireText!templates/{{name}}Template.html'
], function(
    Template
){

    var thisView = Backbone.View.extend({
        template: _.template(Template),
        el: "#el",
        className: "className",
        childrenViews: null,

        initialize: function () {
            this.childrenViews = [];

            this.render();
        },

        render: function () {
            this.$el.html($.trim(this.template(this.model.toJSON())));

            return this;
        },

        events: {

        },

        close: function () {
            _.each(this.childrenViews, function (view) {
                view.close ? view.close() : view.remove();
            }, this);

            this.remove();

            delete this.$el;
            delete this.el;
        }
    });

    return thisView;

});