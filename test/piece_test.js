var assert = require('chai').assert;
var Piece  = require('../lib/piece');

// var squarePiece = require('../lib/game-pieces/square-piece');
// var lPiece      = require('../lib/game-pieces/l-piece');

describe('Game Pieces', function() {
 
  it('should exist', function () {
    assert(new Piece());
  });

  it('can move downward', function () {
    var p = new Piece(null, 0, 0);
    // assert.equal(p.xPos, 0);
    assert.equal(p.yPos, 0);
    p.moveDown();
    assert.equal(p.yPos, 1);
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