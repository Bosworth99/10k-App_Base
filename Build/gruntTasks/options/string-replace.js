module.exports = {
    addModule: {
        files: {
            "../Javascript/<%= global.grunt.config('modulePath') %>": "../Javascript/<%= global.grunt.config('modulePath') %>"
        },
        options: {
            replacements: [
                {
                    pattern: /(require|define)\(\[[\s\S]+?(?=])\]\, function\s?\([\s\S]+?(?=\))/,
                    replacement: function (match, p1, offset, string) {
                        var postFix = "",
                            moduleName = "";

                        if (global.grunt.config('moduleType') === "view") {
                            postFix = "View";
                            moduleName = global.grunt.config('viewName');
                        } else if (global.grunt.config('moduleType') === "model") {
                            postFix = "Model";
                            moduleName = (global.grunt.config('sameNameAsView')) ? global.grunt.config('viewName') : global.grunt.config('modelName');
                        } else if (global.grunt.config('moduleType') === "collection") {
                            postFix = "Collection";
                            moduleName = global.grunt.config('collectionName');
                        } else if (global.grunt.config('moduleType') === "router") {
                            postFix = "Router";
                            moduleName = global.grunt.config('routerName');
                        } else {
                            postFix = "View";
                            moduleName = global.grunt.config('viewName');
                        }

                        var modules = match.split('function(')[1].replace(/[\)\}\s]/g, ""),
                            prefix = (modules === "") ? "\t" : ",\r\n\t",
                            moduleName = moduleName.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });

                        if (modules !== "") {
                            match = match.replace(/\s*$/, "");
                        }

                        return match + prefix + moduleName + postFix + "\r\n";
                    }
                },
                {
                    pattern: /(require|define)\(\[[\s\S]+?(?=])/,
                    replacement: function (match, p1, offset, string) {
                        var modulePath = "",
                            postFix = "",
                            moduleName = "";

                        if (global.grunt.config('moduleType') === "view") {
                            modulePath = "views/";
                            postFix = "View";
                            moduleName = global.grunt.config('viewName');
                        } else if (global.grunt.config('moduleType') === "model") {
                            modulePath = "models/";
                            postFix = "Model";
                            moduleName = (global.grunt.config('sameNameAsView')) ? global.grunt.config('viewName') : global.grunt.config('modelName');
                        } else if (global.grunt.config('moduleType') === "collection") {
                            modulePath = "collections/";
                            postFix = "Collection";
                            moduleName = global.grunt.config('collectionName');
                        } else if (global.grunt.config('moduleType') === "router") {
                            modulePath = "routers/";
                            postFix = "Router";
                            moduleName = global.grunt.config('routerName');
                        } else {
                            modulePath = "views/";
                            postFix = "View";
                            moduleName = global.grunt.config('viewName');
                        }

                        var modules = match.split(/(require|define)\(\[/)[1].replace(/[\)\}\s]/g, ""),
                            prefix = (modules === "") ? "\t'" : ",\r\n\t'";

                        //add any subfolder to the path
                        if (global.grunt.config('subFolder')) {
                            modulePath = modulePath + global.grunt.config('subFolder') + "/";
                        }

                        if (modules !== "") {
                            match = match.replace(/\s*$/, "");
                        }

                        return match + prefix + modulePath + moduleName + postFix + "'\r\n";
                    }
                }
            ]
        }
    },

    fixTestDataTypes: {
        files: [
            {
                expand: true,
                src: ["../Javascript/testData/*.js"]
            }
        ],
        options: {
            replacements: [
                {
                    // Unquote booleans
                    pattern: /: "(true|false)"/g,
                    replacement: ": $1"
                },
                {
                    // Unquote numbers and decimals
                    pattern: /: "(\d*\.?\d*)"/g,
                    replacement: ": $1"
                }
            ]
        }
    }
}