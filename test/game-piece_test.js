var assert      = require('chai').assert;
var squarePiece = require('../lib/game-pieces/square-piece');
var lPiece      = require('../lib/game-pieces/l-piece');

describe('Game Pieces', function() {
  
  it('Square piece can move down', function () {
    var piece = new squarePiece();
    assert.equal(piece.topLeft.row, 0);
    piece.moveDown();
    assert.equal(piece.topLeft.row, 1);
  });
});