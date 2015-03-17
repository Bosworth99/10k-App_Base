module.exports = function (grunt) {
    grunt.registerTask('resetVersion', function () {
        global.pkg.version = "1.0.1";
        grunt.file.write("package.json", JSON.stringify(global.pkg, null, "\t"));
    });
}