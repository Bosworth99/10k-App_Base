module.exports = function (grunt) {
    grunt.registerTask('incrementProd', function () {
        var versionStart = global.pkg.version || "1.0.1",
            versionArray = versionStart.split('.'),
            versionString = versionArray[0] + "." + (parseInt(versionArray[1]) + 1) + ".0";

        global.pkg.version = versionString;
        grunt.file.write("package.json", JSON.stringify(global.pkg, null, "\t"));
    });
}