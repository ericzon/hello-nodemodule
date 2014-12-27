var should = require('chai').should(),
    hello = require('../index');

describe('hello node module', function() {
	describe('#displayMessage()', function(){
		it('should show hello message', function() {
			hello.displayMessage().should.be.equal('Hello Node module!');
		});
	});

	describe('#getString()', function(){
		it('should return an string', function() {
			hello.getString().should.be.equal('This is a string.');
		});
	});
  
  // ...
});
