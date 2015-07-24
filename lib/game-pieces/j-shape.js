var _ = require('lodash');
var Shape = require('../shape');
var Piece = require('../piece');
var Board = require('../board.js');


function jShape(board) {
  this.pieces = [new Piece(board,5,0), new Piece(board,5,1), new Piece(board,5,2), new Piece(board,4,2)];
  this.rotations = [];
  // this.pieces.push(new Piece(board,5,0));
  // this.pieces.push(new Piece(board,5,1));
  // this.pieces.push(new Piece(board,5,2));
  // this.pieces.push(new Piece(board,4,2));
}

// jShape.prototype.canMoveDown = function () {
//   _.every(this.pieces, function(piece) {
//     piece.canMoveDown();
//   });
//   // this.pieces.every(function (piece) {
//   //   return piece.canMoveDown();
//   // });
// };

// jShape.prototype.moveDown = function () {
//   if (this.canMoveDown()) {
//     _.each(this.pieces, function(piece) {
//       return piece.moveDown();
//     });
//   }
// };

jShape.prototype = Object.create(Shape.prototype);
// jShape.prototype = Shape.prototype
// jShape.prototype = new Shape();



module.exports = jShape;
