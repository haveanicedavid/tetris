var _ = require('lodash');

function Shape () {
}

Shape.prototype.canMoveDown = function () {
  return _.every(this.pieces, function(piece) {
    return piece.canMoveDown();
  });
};

// Move Down
Shape.prototype.moveDown = function () {
  if (this.canMoveDown()) {
    _.each(this.pieces, function(piece) { // note: this and 
      piece.moveDown();                   // this work without returns
    });
  } else {
    this.lockPieces();
  }
};

// Move Left
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

// Move Right
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

// Lock position of a shape's pieces
Shape.prototype.lockPieces = function () {
  _.each(this.pieces, function(piece) {
    piece.locked = true;
  });
};

// Rotate
Shape.prototype.canRotate = function () {
  var offsetGroup = this.rotationOffsets[this.offsetGroup];

  return _.every(this.pieces, function(piece, index) {
    var newX = offsetGroup[index][0];
    var newY = offsetGroup[index][1];

    return piece.canRotateTo(newX, newY);
  }); 
};

Shape.prototype.rotate = function () {
  if (this.canRotate()) {
    var offsetGroup = this.rotationOffsets[this.offsetGroup];

    _.each(this.pieces, function(piece, index) { // Index here represents the current piece it's 
                                                 // modifying in the rotationOffsets group
      piece.xPos += offsetGroup[index][0];       // Possible refactor?
      piece.yPos += offsetGroup[index][1];
    });

    // Reset the offsetGroup
    this.offsetGroup += 1;
    if (this.offsetGroup > 4) {
      this.offsetGroup = 1;
    }
  }
};

module.exports = Shape;
