/// <reference path="Gruntfile.js" />
module.exports = function (grunt) {

    global.pkg = grunt.file.readJSON('package.json');

    global.today = ((new Date()).getMonth() + 1) + "-" + (new Date()).getDate() + "-" + (new Date()).getFullYear();
    global.datePath = global.today + "." + global.pkg.version;
    global.dropBase = '//WADSVSS/Drop Points/' + global.pkg.name;
    global.preProdPrefix = global.pkg.name + '_PreProd_';
    global.prodPrefix = global.pkg.name + '_Prod_';
    global.preProdPath = global.dropBase + "/" + (new Date()).getFullYear() + '/' + global.preProdPrefix + global.datePath;
    global.prodPath = global.dropBase + "/" + (new Date()).getFullYear() + '/' + global.prodPrefix + global.datePath;
    global.dropSource = '\\\\wadsvss\Drop Points\\' + global.pkg.name + "\\" + String(global.preProdPrefix + global.datePath);

    global.grunt = grunt;

    global.randomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    global.generateId = function (type) {
        if (type === "Claim") {
            return Math.random().toString(36).substr(2, 2).toUpperCase() + Math.random().toString().substr(2, 5);
        } else if (type === "License") {
            return Math.random().toString(36).substr(2, 2).toUpperCase() + Math.random().toString().substr(2, 5);
        } else {
            return Math.random().toString().substr(2, 8);
        }
    }

    global.chooseFromList = function (list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    global.randomDate = function (start, end) {
        var newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear();
    }

    global.randomBool = function () {
        return (Math.random() > 0.5);
    }

    // configure the tasks
    var config = {

    };

    function loadConfig(path) {
        var fileNames = grunt.file.expand( {cwd: path}, ["*"]);
        var object = {};
        var key;

        fileNames.forEach(function (option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });
        return object;
    }

    config.ipsum = loadConfig('./dataTemplates/')

    //all the normal configs
    grunt.util._.extend(config, loadConfig('./gruntTasks/options/'));

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);
    grunt.loadTasks('gruntTasks');


};
