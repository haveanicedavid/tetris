var _ = require('lodash');

function Board(rows, columns) {
  this.rows     = rows || 20;
  this.cols     = columns || 10;
  this.pieces   = [];
}

// Pieces that are part of a shape will be excluded from 
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

// This is a function within a loop, but i'm not sure how else to do it
Board.prototype.checkRows = function () {
  for (var row = 0; row < this.rows; row++) {
    // Find all pieces within a given row
    var checkRow =  _.filter(this.pieces, function(piece) { 
      return piece.yPos === row;
    });

    // Clear the row if it's full
    if (checkRow.length === this.cols) {
      this.clearRow(row);
    }
  }
};

Board.prototype.clearRow = function (rowNumber) {
  // clear the row
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
    canvas.fillRect(piece.xPos * 20, piece.yPos * 20, 20, 20);
  });
};


module.exports = Board;
