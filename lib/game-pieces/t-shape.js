var Shape = require('../shape');
var Piece = require('../piece');

function tShape(board) {

  this.name = "tShape";
  this.pieces = {
    1: new Piece(board,4,1, "#f4d80f"),
    2: new Piece(board,5,0, "#f4d80f"),
    3: new Piece(board,5,1, "#f4d80f"),
    4: new Piece(board,6,1, "#f4d80f")
  };

  // Defaults to the first set of offset rotations
  this.offsetGroup = 1;

  this.rotationOffsets = {
    1: {
      1: [1, 1],
      2: [-1, 1],
      3: [0, 0],
      4: [-1, -1]
    },
    2: {
      1: [1, -2],
      2: [1, 0],
      3: [0, -1],
      4: [-1, 0]
    },
    3: {
      1: [-1, 0],
      2: [1, 0],
      3: [0, 1],
      4: [1, 2]
    },
    4: {
      1: [-1, 1],
      2: [-1, -1],
      3: [0, 0],
      4: [1, -1]
    }
  };

}

tShape.prototype = Object.create(Shape.prototype);

module.exports = tShape;
