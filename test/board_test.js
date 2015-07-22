var assert = require('chai').assert;
var Board  = require('../lib/board');


describe('The board', function() {

  it('Should exist', function () {
    assert(new Board());
  });

  it('should be an array', function () {
    var board = new Board();
    assert(Array.isArray(board.board));
  });

  it('Should have 16 rows and 10 columns', function () {
    var board = new Board();;
    assert.equal(board.board[0][0], 0);
    assert.equal(board.board[15][9], 0);
    assert.equal(board.board[0].length, 10);
    assert.equal(board.board.length, 16);
    assert.notEqual(board.board.length, 15);
    assert.notEqual(board.board[0], 10);
  });

});