var assert = require('chai').assert;
var Board  = require('../lib/board');


describe('The board', function() {

  it('Should exist', function () {
    assert(new Board());
  });

  it('should be an array', function () {
    var board = new Board();
    assert(Array.isArray(board.setBoard));
  });

  it('Should have 16 rows and 10 columns', function () {
    var board = new Board();;
    assert.equal(board.setBoard[0][0], 0);
    assert.equal(board.setBoard[15][9], 0);
    assert.equal(board.setBoard[0].length, 10);
    assert.equal(board.setBoard.length, 16);
    assert.notEqual(board.setBoard.length, 15);
    assert.notEqual(board.setBoard[0], 10);
  });

});