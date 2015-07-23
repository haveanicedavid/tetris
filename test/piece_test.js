var assert = require('chai').assert;
var Piece  = require('../lib/piece');
var Board = require('../lib/board.js');

// var squarePiece = require('../lib/game-pieces/square-piece');
// var lPiece      = require('../lib/game-pieces/l-piece');

describe('Game Pieces', function() {
 
  it('should exist', function () {
    assert(new Piece());
  });

  xit('can move downward', function () {
    var b = new Board();
    var p = new Piece(b, 0, 3);
    assert.equal(p.yPos, 3);
    p.moveDown();
    assert.equal(p.yPos, 2);
    // p.moveDown();
    // assert.equal(p.yPos, 1);
  });

  xit('cant move downward if the spot is occupado', function () {
    var b = new Board(); 
    var p = new Piece(b, 0, 0);
    var p2 = new Piece(b, 0, 1);
    b.pieces.push(p);
    b.pieces.push(p2);
    p.moveDown();
    assert.equal(p.yPos, 0);
  });

  xit('can move sidewaze', function () {
  });

  xit('cannot move into a spot that is occupado', function () {
  });

  xit('', function () {
  });

  xit('can move down the board', function () {
  });

});