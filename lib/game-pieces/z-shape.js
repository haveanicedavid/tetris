var Shape = require('../shape');
var Piece = require('../piece');

function zShape(board) {

  this.name = "zShape";
  
  this.pieces = {
    1: new Piece(board,6,1, "#8c1399"),
    2: new Piece(board,5,1, "#8c1399"),
    3: new Piece(board,5,0, "#8c1399"),
    4: new Piece(board,4,0, "#8c1399")
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
