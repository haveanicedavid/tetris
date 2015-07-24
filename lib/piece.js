function Piece (board, xPos, yPos) {
  this.board  = board;
  this.xPos   = xPos;
  this.yPos   = yPos;
  this.locked = false;
  board.pieces.push(this);
}

Piece.prototype.canMoveDown = function () {
  var newX = this.xPos;
  var newY = this.yPos + 1;

  if (this.board.isOccupied(newX, newY)) {
    return !this.board.isLocked(newX, newY);
  }
  return !this.board.isOccupied(newX, newY) &&
  this.board.isValidPosition(newX, newY);
};

Piece.prototype.moveDown = function () {
  if (this.canMoveDown()) { 
    this.yPos += 1; 
  } 
};

Piece.prototype.canMoveLeft = function () {
  var newX = this.xPos - 1;
  var newY = this.yPos;

  // this conditional can probably be moved to the isOccupied function
  // but it might be confusing
  if (this.board.isOccupied(newX, newY)) {
    return !this.board.isLocked(newX, newY);
  }
  return !this.board.isOccupied(newX, newY) &&
  this.board.isValidPosition(newX, newY);
};

Piece.prototype.moveLeft = function () {
  if (this.canMoveLeft()) {
    this.xPos -= 1;
  }
};

Piece.prototype.canMoveRight = function () {
  var newX = this.xPos + 1;
  var newY = this.yPos;
  
  if (this.board.isOccupied(newX, newY)) {
    return !this.board.isLocked(newX, newY);
  }
  return !this.board.isOccupied(newX, newY) && 
  this.board.isValidPosition(newX, newY);
};

Piece.prototype.moveRight = function () {
  if (this.canMoveRight()) {
    this.xPos += 1;
  }
};

module.exports = Piece;
