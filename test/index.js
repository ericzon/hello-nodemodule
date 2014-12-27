var should = require('chai').should(),
    DisplayMessage = require('../index'),

describe('#hello node module', function() {
  it('display hello message', function() {
    DisplayMessage().should.equal('Hello Node module!');
  });
  // ...
});
