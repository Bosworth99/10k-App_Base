module.exports = function (grunt) {
    grunt.registerTask('createRouter', function () {
        grunt.config.set('moduleType', "router");

        grunt.task.run([
            'prompt:createRouter',
            'copy:createRouter',
            'checkAddModule',
        ]);
    });
}