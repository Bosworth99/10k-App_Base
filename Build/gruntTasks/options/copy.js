module.exports = {
    janeDeploy: {
        cwd: global.pkg.localDrive + ':/' + global.pkg.minFolder,
        src: [
            '**',
            '!build.txt'
        ],
        dest: global.pkg.janeDrive + ':/' + global.pkg.folder,
        expand: true,
        options: {
            processContent: function (content, srcpath) {
                if (srcpath.indexOf("Controller.js") > -1) {
                    return content.replace(/urlArgs\:(.*?)\,/gi, 'urlArgs: "v=' + (new Date()).getTime() + '",');
                } else if (srcpath.indexOf('.aspx') > -1) {
                    return content.replace(/\.css/gi, ".css?v=" + (new Date()).getTime()).replace(/\.js/gi, ".js?v=" + (new Date()).getTime());
                } else {
                    return content;
                }
            },
            processContentExclude: ['**/*.{dll,xml,pdb,css,vb,png,gif,jpg,ico,svg,ttf,eot,woff,doc,docx,xls,xlsx,pdf}']
        }
    },

    preProdDrop: {
        cwd: global.pkg.janeDrive + ':/' + global.pkg.folder,
        src: [
            '**'
        ],
        dest: global.preProdPath + '/' + global.pkg.folder,
        expand: true
    },

    preProdVault: {
        cwd: global.pkg.janeDrive + ':/' + global.pkg.folder,
        src: [
            '**'
        ],
        dest: "../preProdVault",
        expand: true
    },

    prodDrop: {
        cwd: "../preProdVault",
        src: [
            '**'
        ],
        dest: global.prodPath + '/' + global.pkg.folder,
        expand: true
    },

    createView: {
        cwd: "moduleTemplates",
        src: [
            'view.js'
        ],
        options: {
            processContent: function (content, srcpath) {
                var replaceString = (global.grunt.config('subFolder')) ? global.grunt.config('subFolder') + "/" + global.grunt.config('viewName') : global.grunt.config('viewName');
                return content.replace(/\{\{name\}\}/g, replaceString);
            }
        },
        dest: "../Javascript/views/<%= subFolder %>",
        expand: true,
        rename: function (dest, src) {
            return dest + "/" + src.replace(/view/, '<%= viewName %>' + "View");
        }
    },

    createTemplate: {
        cwd: "moduleTemplates",
        src: [
            'template.html'
        ],
        dest: "../Javascript/templates/<%= subFolder %>",
        expand: true,
        rename: function (dest, src) {
            return dest + "/" + src.replace(/template/, '<%= viewName %>' + "Template");
        }
    },

    createModel: {
        cwd: "moduleTemplates",
        src: [
            'model.js'
        ],
        dest: "../Javascript/models/<%= subFolder %>",
        expand: true,
        rename: function (dest, src) {
            var modelName = ('<%= sameNameAsView %>' == "true") ? '<%= viewName %>' : '<%= modelName %>';
            return dest + "/" + src.replace(/model/, modelName + "Model");
        }
    },

    createCollection: {
        cwd: "moduleTemplates",
        src: [
            'collection.js'
        ],
        dest: "../Javascript/collections/<%= subFolder %>",
        expand: true,
        rename: function (dest, src) {
            var thisName = '<%= collectionName %>';
            return dest + "/" + src.replace(/collection/, thisName + "Collection");
        }
    },

    createRouter: {
        cwd: "moduleTemplates",
        src: [
            'router.js'
        ],
        dest: "../Javascript/routers/<%= subFolder %>",
        expand: true,
        rename: function (dest, src) {
            var thisName = '<%= routerName %>';
            return dest + "/" + src.replace(/router/, thisName + "Router");
        }
    },

    createController: {
        cwd: "moduleTemplates",
        src: [
            'controller.js'
        ],
        dest: "../Javascript/controllers/<%= subFolder %>",
        expand: true,
        rename: function (dest, src) {
            var thisName = '<%= controllerName %>';
            return dest + "/" + src.replace(/controller/, thisName + "Controller");
        }
    }
}