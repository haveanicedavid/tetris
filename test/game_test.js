var assert = require('chai').assert;
var Board  = require('../lib/board');
var Game   = require('../lib/game')

describe('The game runner', function() {
  
  it('exists and has a board', function () {
    var bob = new Game();
    assert(bob);
    assert(bob.board);
  });

  it('starts', function () {
    
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