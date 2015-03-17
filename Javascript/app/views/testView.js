define([
    'requireText!templates/testTemplate.html'
], function(
    Template
){

    var thisView = Backbone.View.extend({
        template: _.template(Template),
        el: "#el",
        className: "className",
        childrenViews: [],

        initialize: function () {
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
        }
    });

    return thisView;

});