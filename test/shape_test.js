var assert = require('chai').assert;
var Shape = require('../lib/shape');
var jShape = require('../lib/game-pieces/j-shape').jShape;

describe('The Shapes', function() {
  
  it('Should exist', function () {
    assert(new Shape());
  });

  it('Has several types of shapes', function () {
    assert(new jShape());
  });

  // it('jShape has coords', function () {
  //   var j = new jShape();
  //   assert.equal(j.xCoords, [0,1,1,1]);
  // });

  it('has Pieces', function () {
    var j = new jShape();
    assert.equal(j.pieces.length, 4);
  });

  // it('jShape can move down', function () {
  //   var jShape = new Shape().jShape();
  //   jShape.moveDown();
  //   console.log(jShape.xCoords);
  // });

});