module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        clean: ['doc'],
        doxv: {
            options: {
                title: 'grunt-doxv title',
                exclude: []
            },
            // define path for both src and dest
            files: {
                src: ['tasks'],
                dest: ['doc']
            }
        },
        nodeunit: {
            unit: ['test/doxv-test.js']
        },
        jshint: {
            files: ['Gruntfile.js', 'tasks/*.js'],
            options: {
                node: true,
                smarttabs: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Load local tasks.
    grunt.loadTasks('tasks');

    // Default task.
    grunt.registerTask('default', ['jshint', 'test']);

    //testing tasks
    grunt.registerTask('test', ['clean', 'doxv', 'nodeunit:unit']);

};