var Shape = require('../shape');
var Piece = require('../piece');

function lShape(board) {

  this.pieces = {
    1: new Piece(board,6,0, "orange"),
    2: new Piece(board,6,1, "orange"),
    3: new Piece(board,5,1, "orange"),
    4: new Piece(board,4,1, "orange")
  };

  // Defaults to the first set of offset rotations
  this.offsetGroup = 1;

  this.rotationOffsets = {
    1: {
      1: [-2, 0],
      2: [-1, -1],
      3: [0, 0],
      4: [1, 1]
    },
    2: {
      1: [0, 1],
      2: [-1, 0],
      3: [0, -1],
      4: [1, -2]
    },
    3: {
      1: [2, 1],
      2: [1, 2],
      3: [0, 1],
      4: [-1, 0]
    },
    4: {
      1: [0, -2],
      2: [1, -1],
      3: [0, 0],
      4: [-1, 1]
    }
  };

}

lShape.prototype = Object.create(Shape.prototype);


module.exports = lShape;
