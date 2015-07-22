var assert = require('chai').assert;
var Board  = require('../lib/board');
var Game   = require('../lib/game');
var squarePiece = require('../lib/game-pieces/square-piece');
var lPiece = require('../lib/game-pieces/l-piece');

describe('The game runner', function() {
  
  it('exists and has a board', function () {
    var game = new Game();
    assert(game);
    assert(game.board.setBoard);
  });

  it('draws a square piece', function () {
    var game = new Game();
    var piece = new squarePiece();
    game.board.draw(piece);
    assert.equal(game.board.setBoard[0][4], 1);
    assert.equal(game.board.setBoard[0][5], 1);
    assert.equal(game.board.setBoard[1][4], 1);
    assert.equal(game.board.setBoard[1][5], 1);
  });

  it('draws an l piece', function () {
    var game = new Game();
    var piece = new lPiece();
    game.board.draw(piece);
    assert.equal(game.board.setBoard[0][5], 1);
    assert.equal(game.board.setBoard[1][5], 1);
    assert.equal(game.board.setBoard[2][5], 1);
    assert.equal(game.board.setBoard[2][4], 1);
  });

  it('draws a square piece after moving down', function () {
    var game = new Game();
    var piece = new squarePiece();
    piece.moveDown();
    game.board.draw(piece);
    assert.equal(game.board.setBoard[0][5], 0);
    assert.notEqual(game.board.setBoard[0][5], 1);
    assert.equal(game.board.setBoard[1][5], 1);
  });

});