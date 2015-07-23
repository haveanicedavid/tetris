function Shape (positionRotations, pieces) {
  this.pieces = Array.prototype.slice.call(arguments, 1);
  this.positionRotations = positionRotations;
  this.positions;
}


// var rotations = {
//   // populate each shape with an array of offset values, each based on current locations.
//   // When we call Shape.rotate, it will use the current rotation values to check against the board's currently filled positions, and then readjust it's pieces with 
//   jShape: ["Test"],
// };



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