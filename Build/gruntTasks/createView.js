module.exports = function (grunt) {
    grunt.registerTask('createView', function () {
        grunt.config.set('moduleType', "view");

        grunt.task.run([
            'prompt:createView',
            'copy:createView',
            'copy:createTemplate',
            'checkAddModule',
            'checkAddModel'
        ]);
    });
}