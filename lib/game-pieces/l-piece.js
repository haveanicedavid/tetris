function lPiece () {
  //TODO: Move shape contents to another array, with every possible combo
  this.shapeNumber = 1;
  this.topLeftOrigin = {row: 0, col: 4};
  this.shape =  shapes[this.shapeNumber];
  // this.shape = [
  //   [0, 1],
  //   [0, 1],
  //   [1, 1]
  // ];
}

module.exports = lPiece;

// Piece.prototype.rotate = function() {
lPiece.prototype.rotate = function() {

  if ( this.shapeNumber === 4 ) {
    this.shapeNumber = 1;
  } else {
    this.shapeNumber ++;
  }
}; 

var shapes = {
  1: [
    [0, 1],
    [0, 1],
    [1, 1]
  ],
  2: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  3: [
    [1, 1],
    [1, 0],
    [1, 0]
  ],
  4: [
    [1, 1, 1],
    [0, 0, 1],
  ]
};