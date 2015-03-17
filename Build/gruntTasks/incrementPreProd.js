module.exports = function (grunt) {
    grunt.registerTask('incrementPreprod', function () {
        var versionStart = global.pkg.version || "1.0.1",
            versionArray = versionStart.split('.'),
            versionString = versionArray[0] + "." + versionArray[1] + "." + (parseInt(versionArray[2]) + 1);

        global.pkg.version = versionString;
        grunt.file.write("package.json", JSON.stringify(global.pkg, null, "\t"));
    });
}