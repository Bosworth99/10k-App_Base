module.exports = function (grunt) {
    grunt.registerTask('createCollection', function () {
        grunt.config.set('moduleType', "collection");

        grunt.task.run([
            'prompt:createCollection',
            'copy:createCollection',
            'checkAddModule',
        ]);

    });
}