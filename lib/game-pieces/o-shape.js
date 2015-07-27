var Shape = require('../shape');
var Piece = require('../piece');

function oShape(board) {
  this.pieces = {
    1: new Piece(board,4,0, "#e50c0c"),
    2: new Piece(board,5,0, "#e50c0c"),
    3: new Piece(board,4,1, "#e50c0c"),
    4: new Piece(board,5,1, "#e50c0c")
  };

  // Defaults to the first set of offset rotations
  this.offsetGroup = 1;

  this.rotationOffsets = {
    1: {
      1: [0, 0],
      2: [0, 0],
      3: [0, 0],
      4: [0, 0]
    },
    2: {
      1: [0, 0],
      2: [0, 0],
      3: [0, 0],
      4: [0, 0]
    },
    3: {
      1: [0, 0],
      2: [0, 0],
      3: [0, 0],
      4: [0, 0]
    },
    4: {
      1: [0, 0],
      2: [0, 0],
      3: [0, 0],
      4: [0, 0]
    },
  };

}

oShape.prototype = Object.create(Shape.prototype);

module.exports = oShape;
