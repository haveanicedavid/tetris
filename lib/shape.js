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

Shape.prototype.canRotate = function () {
  var offset = this.rotationOffsets[this.currentOffset];

  return _.every(this.pieces, function(piece, index) {
    var newX = offset[index][0];
    var newY = offset[index][1];

    return piece.canRotateTo(newX, newY);
  }); 
};

Shape.prototype.rotate = function () {
  if (this.canRotate()) {
    var offset = this.rotationOffsets[this.currentOffset];

    // Index here represents the current piece it's modifying in the rotationOffsets group
    _.each(this.pieces, function(piece, index) {
      piece.xPos += offset[index][0];
      piece.yPos += offset[index][1];
    });

    // Reset the offset
    this.currentOffset += 1;
    if (this.currentOffset > 4) {
      this.currentOffset = 1;
    }
  }
};



module.exports = Shape;

// Shape.prototype.rotate = function () {
//   var offset = this.rotationOffsets[this.currentOffset];
//   this.pieces[1].xPos += offset[1][0];
//   this.pieces[1].yPos += offset[1][1];

//   this.pieces[2].xPos += offset[2][0];
//   this.pieces[2].yPos += offset[2][1];

//   this.pieces[3].xPos += offset[3][0];
//   this.pieces[3].yPos += offset[3][1];

//   this.pieces[4].xPos += offset[4][0];
//   this.pieces[4].yPos += offset[4][1];
// };