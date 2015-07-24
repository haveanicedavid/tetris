var _ = require('lodash');

function Board() {
  this.rows     = 20;
  this.cols     = 10;
  this.pieces   = [];
}

Board.prototype.isOccupied = function (xPos, yPos) {
  var result = false;
  for (var i = 0; i < this.pieces.length; i++) {
    if (this.pieces[i].xPos === xPos && this.pieces[i].yPos === yPos) {
      result = true;
    }
  }  
  return result;
};

Board.prototype.isValidPosition = function (xPos, yPos) {
  return xPos < this.cols && xPos >= 0 &&  yPos < this.rows && yPos >= 0;
};

Board.prototype.checkRows = function () {
  for (var row = 0; row < this.rows; row++) {
    var checkRow =  _.filter(this.pieces, function(piece) {
      return piece.yPos === row;
    });

    if (checkRow.length === this.cols) {
      this.clearRow(row);
    }
  }
};

Board.prototype.clearRow = function (num) {
  this.pieces = _.reject(this.pieces, function(piece) {
    return piece.yPos === num;
  });
};


module.exports = Board;
