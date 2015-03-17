module.exports = function (grunt) {
    grunt.registerTask('createModel', function () {
        grunt.config.set('moduleType', "model");

        grunt.task.run([
            'prompt:createModel',
            'copy:createModel',
            'checkAddModule',
        ]);
    });
}