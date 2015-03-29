define([
    'backbone'
], function(
    Backbone
){
    return function (method, model, options) {
        var modelParams,
            call,
            params,
            origErrorCallback,
            origSuccessCallback,
            xhr;

        // This is a simplified version of backbone sync specific to the L&I UIGatewayRestMethod
        // It is adapted from Backbone.sync
        // http://backbonejs.org/docs/backbone.html#section-141

        // If this model or collection does not have the ServiceName defined
        // then we use the default Backbone sync
        // arguments is a reference to the arguments this function was called with
        if (!model.ServiceName) {
            return Backbone.origSync.apply(Backbone, arguments);
        }
        console.log('syncing: ', method, model.ServiceName, model.MethodNames.read);

        // model can actually be a collection or a model
        // but for ease of use we just call it a model
        // create, update, patch, delete, read
        modelParams = model.getParams(method);
        call = {
            ServiceName: model.ServiceName,
            MethodName: model.MethodNames[method],
            Params: [JSON.stringify(modelParams)]
        };

        // Params specific to UiGatewayRestMethod
        params = {
            type: "POST",
            url: "/Proxy/UIProxy.aspx/UiGatewayRestMethod",
            data: JSON.stringify(call),
            contentType: "application/json; charset=utf-8",
            dataType: "text",
            dataFilter: function (data) { // (data, dataType)
                // Parses a response like '{"d":"{\"IsSuccess\":true,\"Messages\":[],\"ReturnValue\":{\"CurrentPageNumber\":1,\"Result\":[],\"TotalRows\":0}}"}'
                data = $.parseJSON(data);
                data = $.parseJSON(data.d);

                // If there is an error then the response may like "{"d":null}" so data could be null
                if (data) {
                    // Keep a refernece to the Params that were sent to load in this model or collection
                    data.loadedFromParams = modelParams;
                }
                return data;
            },
            parse: false
        };

        // Add a wrapper around the response so that we can parse out error messages
        origErrorCallback = options.error;
        origSuccessCallback = options.success;

        // Wrap the success and error functions to allow custom error handling
        options.success = function (data, textStatus, jqXHR) {
            var messageText;
           
            // Check the IsSuccess flag of the response returned by UiGatewayRestMethod
            if (data && data.IsSuccess) {
                console.info(call.ServiceName, call.MethodName, modelParams, data);
                //console.info(call.ServiceName, call.MethodName, JSON.stringify(modelParams), JSON.stringify(data));
                origSuccessCallback(data, textStatus, jqXHR);

            } else {
                // Handle error messages
                // To remove or change after dev stage
                // Ideally log errors and messages to a central error handling service?

                if (data) {
                    // When IsSuccess is false error messages should be returned in the response
                    messageText = "'" + data.Messages.join(', ') + "'";
                } else {
                    // data was "{"d":null}"
                    messageText = "'No data returned, check the ServiceName, MethodName, and Params? Maybe the service died?'";
                }
                // DEV_ONLY
                console.error('Sync Error: ', call.ServiceName, call.MethodName, messageText, modelParams);
                origErrorCallback(jqXHR, 'error', messageText);
            }
        };
        options.error = function (jqXHR, textStatus, errorThrown) {
            // DEV_ONLY
            console.log('Error', call.ServiceName, call.MethodName, textStatus, errorThrown);
            origErrorCallback(jqXHR, textStatus, errorThrown);
        };

        // Use the default Backbone way of handling ajax and model requests
        // so that we can bind to the request event if needed
        // options contains keys like success and error 
        // which get merged with params to create the jQuery ajax call
        xhr = options.xhr = Backbone.ajax(_.extend(params, options));
        model.trigger('request', model, xhr, options);
        return xhr;
    };
});