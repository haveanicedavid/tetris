var Shape = require('../shape');
var Piece = require('../piece');

exports.jShape = Shape.bind(null, new Piece(null,0,0), new Piece(null,0,1), new Piece(null,1,1), new Piece(null,1,2));

// module.exports = jShape;

// jShape.location = jShape.pieces[0].xPos;

// jShape.prototype.rotate = function() {

// }

// var j = new jShape();

// console.log(j.location);
// console.log(j.pieces);

// j.pieces.forEach(function(piece) {
//   console.log(piece.xPos);
// });


// jShape.pieces.push(new Piece(0, 1));
// console.log(jShape.pieces);

// module.exports = jShape;

// module.exports = function jShape() {
//   return new Shape().bind(null, [0,1,1,1], [0,0,1,2]);
// };

// exports.jShape = 

// module.exports = jShape;