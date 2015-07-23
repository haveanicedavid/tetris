function Piece (board, xPos, yPos) {
  this.board = board;
  this.xPos = xPos;
  this.yPos = yPos;
}

Piece.prototype.canMoveDown = function () {
  return this.board.isOccupied(this.xPos, this.yPos + 1);
};

Piece.prototype.moveDown = function () {
  // if (this.canMoveDown()) { 
  if (this.canMoveDown()) { 
    this.yPos += 1; 
  } 
};

module.exports = Piece;
