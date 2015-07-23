function Shape (pieces) {
  this.pieces = Array.prototype.slice.call(arguments, 0);




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