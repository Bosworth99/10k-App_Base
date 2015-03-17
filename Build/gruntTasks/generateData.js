module.exports = function (grunt) {
    function typeNames(object) {
        if (typeof object === "number") {
            //is it an integer or float
            if (object % 1 === 0) {
                return "integer"
            } else {
                return "float"
            }
        } else {
            return typeof (object);
        }
    }

    function defineTypes(object) {
        //is the top level an array or object?
        if (Array.isArray(object)) {
            //only pass back first in array
            object = object.slice(0, 1);
            for (i = 0; i < object.length; i++) {
                if (typeof object[i] === "object") {
                    object[i] = defineTypes(object[i]);
                } else {
                    object[i] = typeNames(object[i]);
                }
            }
        } else {
            ///loop through object
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    if (typeof object[key] === "object") {
                        object[key] = defineTypes(object[key]);
                    } else {
                        object[key] = typeNames(object[key]);
                    }
                }
            }
        }
        return object;
    }

    var getJSONPath = function (name) {
        return '../Javascript/testData/' + name;
    }

    var fileNames = grunt.file.expand({ cwd: './dataTemplates/' }, ["*"]);

    grunt.registerTask('generateData', function () {
        //get all the data templates tasks

        var taskArray = [];
        fileNames.forEach(function (name) {
            var task = name.replace(/\.js$/, '');
            taskArray.push('ipsum:' + task);
            grunt.config.set('ipsum.' + task + '.dest', getJSONPath(name));
            //grunt.log.writeln(task + ' ' + grunt.config.get('ipsum.' + task));
        });
        taskArray.push('string-replace:fixTestDataTypes');
        taskArray.push('copyContractData');
        grunt.task.run(taskArray);
    });

    grunt.registerTask('copyContractData', function () {
        //create the definition file
        fileNames.forEach(function (name) {
            global.contractData = grunt.file.readJSON(getJSONPath(name));
            grunt.file.write('../Javascript/testData/contracts/' + name, JSON.stringify(defineTypes(global.contractData[0])));
        });
    });


};