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


  it('has Pieces', function () {
    var j = new jShape();
    assert.equal(j.pieces.length, 4);
  });

  it('jShape has rotations', function () {
    var j = new jShape();
    j.positions = j.positionRotations[1];
    assert.equal(j.positions, "Testing");
    // assert.equal(j.positionRotations, "Testing");
  });

  
  // it('can tell all of its pieces to move down', function () {
  //   var j = new jShape();
  // });

  // it('jShape can move down', function () {
  //   var jShape = new Shape().jShape();
  //   jShape.moveDown();
  //   console.log(jShape.xCoords);
  // });

});