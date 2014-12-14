# grunt-doxv [![Build Status](https://travis-ci.org/elaijuh/grunt-doxv.png?branch=master)](https://travis-ci.org/elaijuh/grunt-doxv) 

This plugin enables you to integrate [Doxv](https://github.com/elaijuh/doxv) into your Grunt build.

## Install

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```bash
npm install grunt-doxv --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-doxv');
```
 
## Configuration

Configure the plugin to your project's Gruntfile.js

First, add the `doxv` entry to the options of the `initConfig` method :

```javascript
grunt.initConfig({
    doxv : {
      options: {
        title: "Doxv documentation"
      },
      files: {
        src: ['src'],
        dest: ['doc']
      } 
    }
});
```

The supported options are 

  - `exclude`: exclude the directories to be parsed 

Then, load the plugin 

```javascript
grunt.loadNpmTasks('grunt-doxv');
```
 
## Release History
 - _0.1.0_ First release 


## License
Copyright (c) 2014 Jiale Hu  
Licensed under the MIT license.
