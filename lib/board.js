function Board(rows, columns) {
  this.rows = rows || 20;
  this.cols = columns || 10;
  this.pieces = [];
}

Board.prototype.isOccupied = function (x, y) {
  return this.pieces.find();
};

module.exports = Board;


// function Piece(board) {
//   this.x = 0;
//   this.y = 0;
//   this.board = board;
//   board.pieces.push(this);
// }