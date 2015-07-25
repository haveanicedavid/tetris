var Shape = require('../shape');
var Piece = require('../piece');

function zShape(board) {

  this.pieces = {
    1: new Piece(board,6,1),
    2: new Piece(board,5,1),
    3: new Piece(board,5,0),
    4: new Piece(board,4,0)
  };

  // Defaults to the first set of offset rotations
  this.offsetGroup = 1;

  this.rotationOffsets = {
    1: {
      1: [0, -1],
      2: [1, 0],
      3: [0, 1],
      4: [1, 2]
    },
    2: {
      1: [0, 1],
      2: [-1, 0],
      3: [0, -1],
      4: [-1, -2]
    },
    3: {
      1: [0, -1],
      2: [1, 0],
      3: [0, 1],
      4: [1, 2]
    },
    4: {
      1: [0, 1],
      2: [-1, 0],
      3: [0, -1],
      4: [-1, -2]
    }
  };

}

zShape.prototype = Object.create(Shape.prototype);

module.exports = zShape;
