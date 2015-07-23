function Board(rows, columns) {
  this.rows = rows || 20;
  this.cols = columns || 10;
  this.pieces = [];
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
  for(var i = 0; i < this.rows.length; i++ ) {

  }
};




module.exports = Board;
