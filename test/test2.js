var should = require('chai').should(),
    hello = require('../index');

describe('hello node module2', function() {
	describe('#getInteger()', function(){
		it('should return an integer', function() {
			hello.getInteger().should.be.equal(4444);
		});
	});
  
  // ...
});
