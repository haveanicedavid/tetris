var Shape = require('../shape');
var Piece = require('../piece');
var Board = require('../board.js');


//Working FINALLY
// var positionRotations = {
//   1: 'Testing',
// };

function jShape(board) {
  this.pieces = [new Piece(board,0,0), new Piece(board,0,1), new Piece(board,1,1), new Piece(board,1,2)];
  this.rotations = [];
  // whatever constructor shit you need to do goes here
  // var jShape = Function.bind.call(Shape, null, positionRotations, new Piece(null,0,0), new Piece(null,0,1), new Piece(null,1,1), new Piece(null,1,2));
}


jShape.prototype = Object.create(Shape.prototype);

// jShape.prototype = Shape.prototype;
// jShape.prototype = new Shape();

// var jShape = Function.bind.call(Shape, null, positionRotations, new Piece(null,0,0), new Piece(null,0,1), new Piece(null,1,1), new Piece(null,1,2));




module.exports = jShape;

// var j = new jShape();
// var b = new Board();

// j.pieces.forEach(function(piece) {
//   piece.board = b;
// });

// j.pieces.forEach(function(piece) {
//   // console.log(piece);
//   b.pieces.push(piece);
// });

// console.log(j.pieces);

// console.log(j.pieces);
// console.log(b.pieces);

// console.log(j.positions);
// console.log(j.pieces);
// j.pieces[0].xPos += 1;
// console.log(j.pieces);
// console.log(j.pieces[0].xPos);
