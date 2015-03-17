(function () {

//now load some modules
require.config({
    urlArgs: "v=" + (new Date()).getTime(),//***************************************** remove later
    baseUrl: "Javascript"
});

require([,
	'views/anotherView'
], function(
	AnotherView
){

    //this is a master controller for a page
    var thisController = Backbone.View.extend({

    });

    var controller = new thisController;

});

})();
