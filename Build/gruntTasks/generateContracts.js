module.exports = function (grunt) {
    grunt.config('convert.allContractsYaml', {
        options: {
            indent: 4
        },
        files: [
            {
                expand: true,
                src: ['../Javascript/testData/contracts/*.js'],
                dest: '',
                ext: '.yml'
            }
        ]
    });

    grunt.config('convert.allContractsJSON', {
        options: {
            indent: 4
        },
        files: [
            {
                expand: true,
                src: ['../Javascript/testData/contracts/*.yml'],
                dest: '',
                ext: '.json'
            }
        ]
    });

    grunt.config('clean.allContracts', {
        options: {
            force: true
        },
        src: ['../Javascript/testData/contracts/*.js']
    });

    grunt.registerTask('generateContracts', function () {
        grunt.task.run([
            'convert:allContractsYaml',
            'convert:allContractsJSON',
            'clean:allContracts'
        ]);
    });


};