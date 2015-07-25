var assert = require('chai').assert;
var Shape  = require('../lib/shape');
var jShape = require('../lib/game-pieces/j-shape');
var oShape = require('../lib/game-pieces/o-shape');
var Board  = require('../lib/board.js');
var Piece  = require('../lib/piece.js');
var _      = require('underscore');

describe('The Shapes', function() {
  
  it('Should exist', function () {
    assert(new Shape());
  });

  it('Has several types of shapes', function () {
    var b = new Board();
    assert(new jShape(b));
    assert(new oShape(b));
  });

  it('has 4 Pieces', function () {
    var b = new Board();
    var j = new jShape(b);
    assert.equal(_.size(j.pieces), 4);
  });

  it('can move shapes down', function () {
    var b = new Board();
    var j = new jShape(b);

    assert(b.isOccupied(4, 0));
    assert(b.isOccupied(4, 1));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(6, 1));

    j.moveDown();

    assert(!b.isOccupied(4, 0));
    assert(b.isOccupied(4, 1));
    assert(b.isOccupied(4, 2));
    assert(b.isOccupied(5, 2));
    assert(b.isOccupied(6, 2));
  });

  it('can move shapes left', function () {
    var b = new Board();
    var j = new jShape(b);

    assert(b.isOccupied(4, 0));
    assert(b.isOccupied(4, 1));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(6, 1));

    j.moveLeft();

    assert(!b.isOccupied(4, 0));
    assert(b.isOccupied(3, 0));
    assert(b.isOccupied(3, 1));
    assert(b.isOccupied(4, 1));
    assert(b.isOccupied(5, 1));
  });

  it('can move shapes right', function () {
    var b = new Board();
    var j = new jShape(b);

    assert(b.isOccupied(4, 0));
    assert(b.isOccupied(4, 1));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(6, 1));

    j.moveRight();

    assert(!b.isOccupied(4, 0));
    assert(b.isOccupied(5, 0));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(6, 1));
    assert(b.isOccupied(7, 1));
  });

  it('can tell if a piece is locked', function () {
    var b = new Board();
    var p = new Piece(b, 5, 0);
    assert(!b.isLocked(5, 0));
    p.locked = true;
    assert(b.isLocked(5, 0));
  });

});