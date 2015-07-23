var Shape = require('../shape');
var Piece = require('../piece');
var Board = require('../board.js');


function jShape(board) {
  this.pieces = [new Piece(board,0,0), new Piece(board,0,1), new Piece(board,1,1), new Piece(board,1,2)];
  this.rotations = [];
}


jShape.prototype = Object.create(Shape.prototype);
// jShape.prototype = Shape.prototype
// jShape.prototype = new Shape();



module.exports = jShape;
