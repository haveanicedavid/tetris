function Piece (board, xPos, yPos) {
  this.board = board;
  this.xPos = xPos;
  this.yPos = yPos;
}

Piece.prototype.canMoveDown = function () {
  return this.board.isOccupied(this.xPos + 1, this.yPos);
};

Piece.prototype.moveDown = function () {
  if (this.canMoveDown) { this.x += 1; }
};

module.exports = Piece;
