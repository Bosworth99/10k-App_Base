module.exports = function (grunt) {
    grunt.registerTask('createController', function () {

        grunt.task.run([
            'prompt:createController',
            'copy:createController'
        ]);
    });
}