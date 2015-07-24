var _ = require('lodash');

function Shape () {
}

Shape.prototype.canMoveDown = function () {
  return _.every(this.pieces, function(piece) {
    return piece.canMoveDown();
  });
};

Shape.prototype.moveDown = function () {
  if (this.canMoveDown()) {
    _.each(this.pieces, function(piece) { // note: this and 
      piece.moveDown();                   // this work without returns
    });
  }
};

Shape.prototype.canMoveLeft = function () {
  return _.every(this.pieces, function(piece) {
    return piece.canMoveLeft();
  });
};

Shape.prototype.moveLeft = function () {
  if (this.canMoveLeft()) {
    _.each(this.pieces, function(piece) {
      piece.moveLeft();
    });
  }
};

Shape.prototype.canMoveRight = function () {
  return _.every(this.pieces, function(piece) {
    return piece.canMoveRight();
  });
};

Shape.prototype.moveRight = function () {
  if (this.canMoveRight()) {
    _.each(this.pieces, function(piece) {
      piece.moveRight();
    });
  }
};

module.exports = Shape;