function Shape () {
}

Shape.prototype.canMoveDown = function () {
  this.pieces.every(function (piece) {
    return piece.canMoveDown();
  });
};

Shape.prototype.moveDown = function () {
  if (this.canMoveDown) {
    this.pieces.forEach(function (piece) {
      piece.moveDown();
    });
  }
};

module.exports = Shape;