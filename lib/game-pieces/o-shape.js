var Shape = require('../shape');
var Piece = require('../piece');

function oShape(board) {
  this.pieces = [new Piece(board,5,0), new Piece(board,5,1), new Piece(board,4,0), new Piece(board,4,1)];
  this.rotations = [];
}

oShape.prototype = Object.create(Shape.prototype);

module.exports = oShape;