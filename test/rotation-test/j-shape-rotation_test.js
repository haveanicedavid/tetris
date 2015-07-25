var assert = require('chai').assert;
var jShape = require('../../lib/game-pieces/j-shape');
var Board  = require('../../lib/board.js');

describe('J Shape Rotations', function() {
  
  it('can rotate a j piece one time', function () {
    var b = new Board();
    var j = new jShape(b);
    assert(b.isOccupied(4, 0)); // Original positions
    assert(b.isOccupied(4, 1));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(6, 1));
    j.rotate();
    assert(!b.isOccupied(4, 0));
    assert(b.isOccupied(4, 2));
    assert(b.isOccupied(5, 2));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(5, 0));
  });

  it('can rotate a j piece two times', function () {
    var b = new Board();
    var j = new jShape(b);

    j.rotate();
    j.rotate();

    assert(b.isOccupied(6, 1));
    assert(b.isOccupied(6, 0));
    assert(b.isOccupied(5, 0));
    assert(b.isOccupied(4, 0));
  });

  it('can rotate a j piece two times', function () {
    var b = new Board();
    var j = new jShape(b);

    j.rotate();
    j.rotate();

    assert(b.isOccupied(6, 1));
    assert(b.isOccupied(6, 0));
    assert(b.isOccupied(5, 0));
    assert(b.isOccupied(4, 0));
  });

  it('can rotate a j piece three times', function () {
    var b = new Board();
    var j = new jShape(b);

    j.rotate();
    j.rotate();
    j.rotate();

    assert(b.isOccupied(6, 0));
    assert(b.isOccupied(5, 0));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(5, 2));
  });

  it('rotating 4 times resets to the original position', function () {
    var b = new Board();
    var j = new jShape(b);

    assert(b.isOccupied(4, 0)); // Original positions
    assert(b.isOccupied(4, 1));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(6, 1));

    j.rotate();
    j.rotate();
    j.rotate();
    j.rotate();

    assert(b.isOccupied(4, 0)); 
    assert(b.isOccupied(4, 1));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(6, 1));
  });

  it('resets the rotation', function () {
    var b = new Board();
    var j = new jShape(b);

    assert(b.isOccupied(4, 0)); // Original positions
    assert(b.isOccupied(4, 1));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(6, 1));

    j.rotate();
    j.rotate();
    j.rotate();
    j.rotate();
    j.rotate();

    assert(b.isOccupied(4, 2));
    assert(b.isOccupied(5, 2));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(5, 0));
  });

});