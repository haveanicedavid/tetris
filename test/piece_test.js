var assert = require('chai').assert;
var Piece  = require('../lib/piece');
var Board  = require('../lib/board.js');

describe('Game Pieces', function() {
 
  it('should exist', function () {
    var b = new Board();

    assert(new Piece(b));
  });

  it('can move downward', function () {
    var b = new Board();
    var p = new Piece(b, 0, 0);

    p.moveDown();
    assert.equal(p.yPos, 1);
  });

  it('Can move left and right', function () {
    var b = new Board();
    var p = new Piece(b, 4, 0);

    p.moveLeft();
    assert.equal(p.xPos, 3);

    p.moveRight();
    assert.equal(p.xPos, 4);

    p.moveRight();
    assert.equal(p.xPos, 5);
  });

  it('Cant move byond the board', function () {
    var b  = new Board();
    var p1 = new Piece(b, 0, 0);
    var p2 = new Piece(b, 9, 0);

    p1.moveLeft();
    p2.moveRight();
    assert.equal(p1.xPos, 0);
    assert.equal(p2.xPos, 9);
  });

  it('cant move downward if the spot esta occupado and locked', function () {
    var b  = new Board(); 
    var p  = new Piece(b, 0, 0);
    var p2 = new Piece(b, 0, 1);

    p2.locked = true;
    b.pieces.push(p);
    b.pieces.push(p2);
    assert.equal(p.yPos, 0);

    p.moveDown();
    assert.equal(p.yPos, 0);

    p2.locked = false;

    p.moveDown();
    p2.moveDown();
    assert.equal(p.yPos, 1);
    assert.equal(p2.yPos, 2);
    assert(!b.isOccupied(0, 0));
  });

  it('cant move downward if it is at the last spot on the board', function () {
    var b  = new Board(); 
    var p  = new Piece(b, 0, 19);

    b.pieces.push(p);

    assert.equal(p.yPos, 19);
  });

});