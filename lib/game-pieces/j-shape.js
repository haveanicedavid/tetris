var Shape = require('../shape');
var Piece = require('../piece');


// TODO: Create a start location (0, 4)? and populate the new pieces relative to that, might make rotations easier
function jShape(board) {
  this.pieces = [new Piece(board,5,0), new Piece(board,5,1), new Piece(board,5,2), new Piece(board,4,2)];
  this.rotations = [];
}

jShape.prototype = Object.create(Shape.prototype);
// jShape.prototype = Shape.prototype
// jShape.prototype = new Shape();



module.exports = jShape;
