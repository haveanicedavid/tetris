var Shape = require('../shape');
var Piece = require('../piece');


//Working FINALLY
var positionRotations = {
  1: 'Testing',
};

var jShape = Function.bind.call(Shape, null, positionRotations, new Piece(null,0,0), new Piece(null,0,1), new Piece(null,1,1), new Piece(null,1,2));

// var jShape = Function.bind.call(Shape, null, 'jShape',new Piece(null,0,0), new Piece(null,0,1), new Piece(null,1,1), new Piece(null,1,2));



module.exports = jShape;

// var j = new jShape();

// console.log(j.positions);
// console.log(j.pieces);
// j.pieces[0].xPos += 1;
// console.log(j.pieces);
// console.log(j.pieces[0].xPos);
