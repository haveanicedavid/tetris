var assert = require('chai').assert;
var Board  = require('../lib/board');
var Game   = require('../lib/game');
var squarePiece = require('../lib/game-pieces/square-piece');

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
  });

  // xit('has a timer', function () {
  //  var game = new Game();
  //  game.start();
  //  setTimeout(1500);
  //  assert.equal(game.board.board[3][4], 1);
  // });

  // xit('should start with a block at position 0, 5', function (done) {
  //   var board = new Board();
  // });

});