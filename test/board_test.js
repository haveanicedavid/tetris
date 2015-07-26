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

  it('can make a board of different sizes', function () {
    var smallBoard = new Board(16, 8);
    assert.equal(smallBoard.rows, 16);
    assert.equal(smallBoard.cols, 8);

    var bigBoard = new Board(40, 15);
    assert.equal(bigBoard.rows, 40);
    assert.equal(bigBoard.cols, 15);
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

  it('should know if a position is not valid', function () {
    var board = new Board();
    var maxValidX = board.cols - 1;
    var maxValidY = board.rows - 1;
    assert(!board.isValidPosition(-1, 0));
    assert(!board.isValidPosition(maxValidX + 1, 0));
    assert(!board.isValidPosition(0, -1));
    assert(!board.isValidPosition(0, maxValidY + 1));
  });

  it('should know when a row is filled and clear it', function () {
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

    board.checkRows();
    assert(board.isOccupied(1,19));
    assert(board.isOccupied(6,19));

    new Piece(board, 9, 19);

    board.checkRows();
    assert(!board.isOccupied(1,19));
    assert(!board.isOccupied(6,19));
  });

  it('Can generate random shapes', function () {
    var board = new Board();
    
  });


});