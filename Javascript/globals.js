var app = app || {};

(function () {

    app.setRequireConfig = function () {
        require.config({
            urlArgs: "v=" + (new Date()).getTime(),//***************************************** remove later
            baseUrl: "Javascript"
        });
    }

})();