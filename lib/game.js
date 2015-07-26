var $ = require('jQuery');
var canvas  = document.getElementById('game');
var context = canvas.getContext('2d');
var Board   = require('./board.js');
var jShape  = require('./game-pieces/j-shape.js');
var oShape = require('./game-pieces/o-shape.js');
var iShape = require('./game-pieces/i-shape.js');
var lShape = require('./game-pieces/L-shape.js');
var tShape = require('./game-pieces/t-shape.js');
var sShape = require('./game-pieces/s-shape.js');
var zShape = require('./game-pieces/z-shape.js');
var _ = require('lodash');

var gameBoard = new Board();

var currentShape;

function generateShape () {
  var shapes    = [jShape, oShape, iShape, lShape, tShape, sShape, zShape];

  var tempShape = _.sample(shapes);
  var shape     = new tempShape(gameBoard);
  return shape;
}
// var shape  = new lShape(gameBoard);


// gameBoard.draw(context);




requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  gameBoard.draw(context);

  // if (!shape.canMoveDown) {
  //   _.each(shape.pieces, function(piece) {
  //     piece.locked = true;
  //   });
  //   shape = new tempShape(gameBoard);
  // }

  shape.moveDown();

  setTimeout(function() {
    requestAnimationFrame(gameLoop);
  }, 500);
});



// Key Bindings
$(document).keydown(function(event) {
  switch(event.which) {
    case 37: // left
    shape.moveLeft();
    resetBoard();
    break;

    case 38: // up
    shape.rotate();
    resetBoard();
    break;

    case 39: // right
    shape.moveRight();
    resetBoard();
    break;

    case 40: // down
    shape.moveDown();
    resetBoard();
    break;

      default: return; // exit this handler for other keys
  }
    event.preventDefault(); // prevent the default action (scroll / move caret)
});

function resetBoard () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  gameBoard.draw(context);
}