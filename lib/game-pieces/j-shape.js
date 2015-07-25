var Shape = require('../shape');
var Piece = require('../piece');

// TODO: Create a start location (0, 4)? and populate the new pieces relative to that, might make rotations easier
function jShape(board) {
  // this.pieces = [new Piece(board,3,0), new Piece(board,3,1), new Piece(board,4,1), new Piece(board,5,1)];
  this.pieces = {
    1: new Piece(board,4,0),
    2: new Piece(board,4,1),
    3: new Piece(board,5,1),
    4: new Piece(board,6,1) 
  };

  this.currentOffset = 1;
  this.rotationOffsets = {
    1: {
      1: [0, 2],
      2: [1, 1],
      3: [0, 0],
      4: [-1, -1]
    },

    2: {
      1: [2, -1],
      2: [1, -2],
      3: [0, -1],
      4: [-1, 0]
    },

    3: {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 2]
    },
    
    4: {
      1: [-2, 0],
      2: [-1, 1],
      3: [0, 0],
      4: [1, -1]
    },
    
  };
}

jShape.prototype = Object.create(Shape.prototype);
// jShape.prototype = Shape.prototype
// jShape.prototype = new Shape();

module.exports = jShape;
