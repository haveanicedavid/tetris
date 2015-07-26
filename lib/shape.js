var _ = require('lodash');

function Shape () {
}

// Move Down
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
  } else {
    this.lockPieces();
  }
};

Shape.prototype.lockPieces = function () {
  _.each(this.pieces, function(piece) {
    piece.locked = true;
  });
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
      piece.xPos += offsetGroup[index][0];
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

// Shape.prototype.rotate = function () {
//   var offsetGroup = this.rotationOffsets[this.offsetGroup];
//   this.pieces[1].xPos += offsetGroup[1][0];
//   this.pieces[1].yPos += offsetGroup[1][1];

//   this.pieces[2].xPos += offsetGroup[2][0];
//   this.pieces[2].yPos += offsetGroup[2][1];

//   this.pieces[3].xPos += offsetGroup[3][0];
//   this.pieces[3].yPos += offsetGroup[3][1];

//   this.pieces[4].xPos += offsetGroup[4][0];
//   this.pieces[4].yPos += offsetGroup[4][1];
// };