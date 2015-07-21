var assert = require('chai').assert;
var Block  = require('../lib/block');


describe('The blocks', function() {
  
  it('Should exist', function () {
    assert(new Block());
  });

  it('should be able to move down', function () {
    var bob = new Block();
    assert.equal(bob.referencePoint.join(""), "05");
    bob.moveDown();
    assert.equal(bob.referencePoint.join(""), "15");
  });

});