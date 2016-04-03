'use strict';

exports = module.exports = testOptional;

function testOptional(title, fn) {
    
    it(title, function() {
        try {
           return fn.call(this);
        } catch (err) {
            if (err.message=="Not implemented") {
                this.test.skip();
            } else {
                throw err;
            }
        }
    });

}