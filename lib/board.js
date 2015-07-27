var _      = require('lodash');
var jShape = require('./game-pieces/j-shape.js');
var oShape = require('./game-pieces/o-shape.js');
var iShape = require('./game-pieces/i-shape.js');
var lShape = require('./game-pieces/L-shape.js');
var tShape = require('./game-pieces/t-shape.js');
var sShape = require('./game-pieces/s-shape.js');
var zShape = require('./game-pieces/z-shape.js');

function Board(rows, columns) {
  this.rows     = rows || 20;
  this.cols     = columns || 10;
  this.pieces   = [];
  this.score    = 0;
  this.gameOver = false;
}

Board.prototype.generateShape = function () {
  // Stop the game if there's no room for a new piece
  if (this.isOccupied(5, 2) || this.isOccupied(4, 2) || this.isOccupied(6, 2)) {
    this.gameOver = true;
  }

  var shapes = [jShape, oShape, iShape, lShape, tShape, sShape, zShape];
  var shape  = _.sample(shapes);
  return new shape(this);

};

// Pieces that are part of a shape will be excluded from isOccupied
Board.prototype.isLocked = function (xPos, yPos) {
  var piece = _.find(this.pieces, function(piece) {
    return piece.xPos === xPos && piece.yPos === yPos;
  });
  return piece.locked;
};

Board.prototype.isOccupied = function (xPos, yPos) {
  return _.any(this.pieces, function(piece) {
    return piece.xPos === xPos && piece.yPos === yPos;
  });
};

Board.prototype.isValidPosition = function (xPos, yPos) {
  return xPos < this.cols && xPos >= 0 &&  yPos < this.rows && yPos >= 0;
};

// This has a function within a loop, but i'm not sure how else to do it
Board.prototype.checkRows = function () {
  for (var row = 0; row < this.rows; row++) {
    // Find all pieces within a given row
    var checkRow =  _.filter(this.pieces, function(piece) {
      return piece.yPos === row;
    });

    // Clear the row if it's full
    if (checkRow.length >= this.cols) {
      this.clearRow(row);
      this.score += 1;
      console.log(this.score);
      this.clearEmptyBelow(row);
    }
  }
};

// This works for a row that's entirely empty, but not for hovering pieces
Board.prototype.clearEmptyBelow = function (rowNumber) {
  for (var row = rowNumber; row <= this.rows; row++) {
    var checkRow = _.filter(this.pieces, function(piece) {
      return piece.yPos === row;
    });

    if (checkRow.length === 0) {
      var piecesAboveEmptyRow = _.filter(this.pieces, function(piece) {
        return piece.yPos <= row;
      });
      _.each(piecesAboveEmptyRow, function(piece) {
        piece.moveDown();
      });
    }
  }
};

Board.prototype.clearRow = function (rowNumber) {
  // clear the row
  // These functions must be done separately to avoid trying to move blocks
  // Into locked positions
  this.pieces = _.reject(this.pieces, function(piece) {
    return piece.yPos === rowNumber;
  });

  // unlock the pieces
  _.each(this.pieces, function(piece) {
    piece.locked = false;
  });

  // move the pieces down
  _.each(this.pieces, function(piece) {
    piece.moveDown();
  });

  // Re-lock the pieces
  _.each(this.pieces, function(piece) {
    piece.locked = true;
  });

};


Board.prototype.draw = function (canvas) {
  _.each(this.pieces, function(piece) {
    canvas.fillStyle = piece.color;
    canvas.fillRect(piece.xPos * 30, piece.yPos * 30, 30, 30);
  });
};


module.exports = Board;
