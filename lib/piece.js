function Piece (board, xPos, yPos) {
  this.board = board;
  this.xPos = xPos;
  this.yPos = yPos;
  this.locked = false;
  board.pieces.push(this);
}

Piece.prototype.canMoveDown = function () {
  if (this.board.isOccupied(this.xPos, this.yPos + 1)) {
    return !this.board.isLocked(this.xPos, this.yPos + 1);
  }
  return !this.board.isOccupied(this.xPos, this.yPos + 1) &&
  this.board.isValidPosition(this.xPos, this.yPos + 1);
};

Piece.prototype.moveDown = function () {
  if (this.canMoveDown()) { 
    this.yPos += 1; 
  } 
};

Piece.prototype.canMoveLeft = function () {
  return !this.board.isOccupied(this.xPos - 1, this.yPos) &&
  this.board.isValidPosition(this.xPos - 1, this.yPos);
};

Piece.prototype.moveLeft = function () {
  if (this.canMoveLeft()) {
    this.xPos -= 1;
  }
};

Piece.prototype.canMoveRight = function () {
  return !this.board.isOccupied(this.xPos + 1, this.yPos) && 
  this.board.isValidPosition(this.xPos + 1, this.yPos);
};

Piece.prototype.moveRight = function () {
  if (this.canMoveRight()) {
    this.xPos += 1;
  }
};

module.exports = Piece;
