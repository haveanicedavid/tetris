var assert      = require('chai').assert;
var squarePiece = require('../lib/game-pieces/square-piece');
// var lPiece      = require('../lib/game-pieces/l-piece');

describe('Game Pieces', function() {
 
  it('Square piece can move down', function () {
    var piece = new squarePiece();
    assert.equal(piece.topLeftOrigin.row, 0);
    piece.moveDown();
    assert.equal(piece.topLeftOrigin.row, 1);
  });

  it('Square piece can move left', function () {
    var piece = new squarePiece();
    assert.equal(piece.topLeftOrigin.col, 4);
    piece.moveLeft();
    assert.equal(piece.topLeftOrigin.col, 3);
  });


  it('l piece can rotate', function () {
    var piece = new squarePiece();
    assert.equal(piece.topLeftOrigin.col, 4);
    piece.moveLeft();
    assert.equal(piece.topLeftOrigin.col, 3);
  });

});