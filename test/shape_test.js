var assert = require('chai').assert;
var Shape = require('../lib/shape');
var jShape = require('../lib/game-pieces/j-shape');

describe('The Shapes', function() {
  
  it('Should exist', function () {
    assert(new Shape());
  });

  it('Has several types of shapes', function () {
    assert(new jShape());
  });

  it('has 4 Pieces', function () {
    var j = new jShape();
    assert.equal(j.pieces.length, 4);
  });

  it('jShape has rotations', function () {
    var j = new jShape();
    j.rotations.push("test");
    assert(j.rotations);
    assert.equal(j.rotations, "test");
  });

});