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

module.exports = Board;


// function Piece(board) {
//   this.x = 0;
//   this.y = 0;
//   this.board = board;
//   board.pieces.push(this);
// }