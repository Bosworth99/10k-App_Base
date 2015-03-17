module.exports = function (grunt) {
    grunt.registerTask('checkAddModule', function () {
        grunt.config.set('modulePath', grunt.config('whichParent') + '.js');

        grunt.task.run([
            'string-replace:addModule'
        ]);
    });
}