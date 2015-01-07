/*
 * grunt-doxv
 * https://github.com/elaijuh/grunt-doxv
 *
 * Copyright (c) 2014 Jiale Hu
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
    'use strict';

    function doxvTask() {
        var exec = require('child_process').exec,
            path = require('path'),
            done = this.async(),
            src = this.filesSrc || '.',
            dest = this.data.dest,
            doxvCmd = path.resolve(__dirname, "../node_modules/.bin/doxv"),
            options = this.options(),
            exclude = options.exclude,
            args = [];

        args.push('-i');
        args.push(src);

        if (dest && dest.length) {
            dest = dest.join(',');
            args.push('-o');
            args.push(dest);
        } else {
            dest = 'doc';
        }
        

        if (exclude && exclude.length) {
            args.push('-e');
            args.push(exclude.join(','));
        }
        
        exec(doxvCmd + ' build ' + args.join(' '), function (err, stdout, stderr) {
            if (err) {
                grunt.log.error('Error: ' + err);
            } else {
                grunt.log.ok('Documentation is generated to ' + path.resolve(dest));
                done();
            }
        });
        
    }
    grunt.registerMultiTask('doxv', 'Grunt plugin for Doxv', doxvTask);
};