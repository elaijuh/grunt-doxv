var grunt = require('grunt'),
    fs = require('fs');
    
var extractArgs = function(fn){
    'use strict';

    if(typeof fn !== 'function'){
        throw new Error('TypeError : The extractArgs function requires the fn argument to be a function!');
    }
    return fn.toString ().match (/function\s+\w*\s*\((.*?)\)/)[1].split (/\s*,\s*/);
};


exports.doxvTest = {
    
    setUp: function(done) {
        'use strict';

        this.doxvTask = require('../tasks/doxv');
        this.destination = 'doc';
        done();
    },

    'task check' : function (test){
        'use strict';   
    
        test.notStrictEqual(this.doxvTask, undefined, 'the jsdoc task should be set up');
        test.equal(typeof this.doxvTask, 'function', 'the task must be a function');   
        
        var taskArgs = extractArgs(this.doxvTask);
        test.ok(taskArgs.length > 0 && taskArgs[0] === 'grunt', 'the task must declare the grunt context as 1st parameter');
        
        test.done();
    }, 

    'destination check': function (test) {
        'use strict';

        fs.exists(this.destination, function(result) {
            test.ok(result === true, 'The documentation destination should exists');
            test.done();
        });
    },

    'file content check': function (test) {
        'use strict';
        var base = this.destination + '/';
        var expectedFiles = ['index.html', 'api.html']; 

        expectedFiles.forEach(function(file) {
            test.ok(fs.existsSync(base + file), 'The file ' + base + file + ' should exists');
        });
        test.done();
    }
};