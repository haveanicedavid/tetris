var assert = require('chai').assert;
var Game   = require('../lib/game');

// TODO: move the piece elements into the Game.js file, in a function that randomly generates pieces
var squarePiece = require('../lib/game-pieces/square-piece');
var lPiece = require('../lib/game-pieces/l-piece');

// require('../lib/game-pieces'); // This is how to keep all pieces in one folder if we want

describe('The game runner', function() {
  
  it('when a game is created it starts with an empty board', function () {
    var game = new Game();
    assert(game);
    assert(game.board.setBoard);
  });

  it('draws a square piece', function () {
    var game = new Game();
    var piece = new squarePiece();
    // var piece = new gamePieces.squarePiece(); // how to call a piece from the conglaborate game-pieces.js
    game.board.draw(piece);
    assert.equal(game.board.setBoard[0][4], 1);
    assert.equal(game.board.setBoard[0][5], 1);
    assert.equal(game.board.setBoard[1][4], 1);
    assert.equal(game.board.setBoard[1][5], 1);
    assert.notEqual(game.board.setBoard[1][6], 1);
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

  it('only draws 1s', function () {
    var game = new Game();
    var piece = new lPiece();
    game.board[0][4] = 1;
    assert.equal(game.board.setBoard[0][4], 1);
    game.board.draw(piece);
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