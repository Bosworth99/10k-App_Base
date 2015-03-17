module.exports = function (grunt) {
    grunt.registerTask('checkAddModel', function () {
        if (grunt.config('addModel')) {
            grunt.config.set('moduleType', "model");

            grunt.task.run([
                'copy:createModel',
                'checkAddModule'
            ]);
        }
    });
}