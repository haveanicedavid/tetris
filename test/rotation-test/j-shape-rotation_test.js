var assert = require('chai').assert;
var Shape  = require('../../lib/shape');
var jShape = require('../../lib/game-pieces/j-shape');
var Board  = require('../../lib/board.js');
var Piece  = require('../../lib/piece.js');
var _      = require('underscore');

describe('J Shape Rotations', function() {
  
  it('can rotate a j piece', function () {
    var b = new Board();
    var j = new jShape(b);
    assert(b.isOccupied(4, 0));
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

});