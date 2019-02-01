module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            dev: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        // Turn on the server
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'src/content/css/style.css' : 'src/content/sass/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    grunt.registerTask('default',['concurrent']);
}