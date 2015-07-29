var _      = require('lodash');
var jShape = require('./game-pieces/j-shape.js');
var oShape = require('./game-pieces/o-shape.js');
var iShape = require('./game-pieces/i-shape.js');
var lShape = require('./game-pieces/L-shape.js');
var tShape = require('./game-pieces/t-shape.js');
var sShape = require('./game-pieces/s-shape.js');
var zShape = require('./game-pieces/z-shape.js');

var shapes = [jShape, oShape, iShape, lShape, tShape, sShape, zShape];
// var shape  = _.sample(shapes);

function Board(rows, columns) {
  this.rows     = rows || 20;
  this.cols     = columns || 10;
  this.pieces   = [];
  this.score    = 0;
  this.gameOver = false;
  this.nextShape = _.sample(shapes);
}

Board.prototype.generateShape = function () {
  // Stop the game if there's no room for a new piece
  if (this.isOccupied(5, 2) || this.isOccupied(4, 2) || this.isOccupied(6, 2)) {
    this.gameOver = true;
  }

  var CurrentShape = this.nextShape;
  this.nextShape = _.sample(shapes);

  return new CurrentShape(this);

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
  var newScore = 0;
  var scoreModifier = 1;

  for (var row = 0; row < this.rows; row++) {
    // Find all pieces within a given row
    var checkRow =  _.filter(this.pieces, function(piece) {
      return piece.yPos === row;
    });

    // Clear the row if it's full
    if (checkRow.length >= this.cols) {
      this.clearRow(row);
      newScore += 1;
      scoreModifier += 0.75;
    }
  }
  this.score += newScore * Math.round(scoreModifier);
};

Board.prototype.clearRow = function (rowNumber) {
  this.pieces = _.reject(this.pieces, function(piece) {
    return piece.yPos === rowNumber;
  });

  var piecesToShiftDown = _.filter(this.pieces, function(piece) {
    return piece.yPos < rowNumber;
  });

  // Shift piece above cleared row downward
  _.each(piecesToShiftDown, function(piece) {
    piece.yPos += 1;
  });

};


Board.prototype.draw = function (context) {
  _.each(this.pieces, function(piece) {
    context.fillStyle = piece.color;
    context.fillRect(piece.xPos * 30 - 1, piece.yPos * 30 + 1, 30, 30);
    context.lineWidth="0.5";
    context.strokeStyle = "black";
    context.strokeRect(piece.xPos * 30 - 1, piece.yPos * 30 + 1, 30, 30);
  });
};


module.exports = Board;
