var assert = require('chai').assert;
var Board  = require('../lib/board');
var Piece  = require('../lib/piece');


describe('The board', function() {

  it('Should exist', function () {
    assert(new Board());
  });

  it('starts with 16 rows and 10 columns by default', function () {
    var bob = new Board();
    assert.equal(bob.rows, 16);
    assert.equal(bob.cols, 10);
  });

  xit('should store new pieces', function () {
    var board = new Board();
    var piece = new Piece(board);
  });

  xit('should know when a row is filled', function () {
  });

  xit('should know when a row is filled', function () {
  });

  xit('should tell if a location is occupado', function () {
  });


  xit('should know when a row is filled', function () {
  });

});