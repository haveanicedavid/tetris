var assert = require('chai').assert;
var Board  = require('../lib/board');
var Piece  = require('../lib/piece');


describe('The board', function() {

  it('Should exist', function () {
    assert(new Board());
  });

  it('starts with 20 rows and 10 columns by default', function () {
    var bob = new Board();
    assert.equal(bob.rows, 20);
    assert.equal(bob.cols, 10);
  });

  it('should store new pieces', function () {
    var board = new Board();
    var piece = new Piece(board);
    assert.equal(piece.board, board);
  });

  it('should know if a position is occupied', function () {
    var board = new Board();
    board.pieces.push(new Piece(board, 0, 3)) ;
    assert(board.isOccupied(0, 3));
    assert(!board.isOccupied(0, 4));
  });

  it('should know when a row is filled', function () {
    var board = new Board();
    new Piece(board, 0, 19);
    new Piece(board, 1, 19);
    new Piece(board, 2, 19);
    new Piece(board, 3, 19);
    new Piece(board, 4, 19);
    new Piece(board, 5, 19);
    new Piece(board, 6, 19);
    new Piece(board, 7, 19);
    new Piece(board, 8, 19);
    new Piece(board, 9, 19);

    assert(board.isOccupied(1,19));
    assert(board.isOccupied(6,19));
    board.checkRows();
    assert(!board.isOccupied(1,19));
    assert(!board.isOccupied(6,19));
  });


});