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
    _.each(this.pieces, function(piece) { // this and 
      piece.moveDown();                   // this work without returns. Why?
    });
  }
};

module.exports = Shape;