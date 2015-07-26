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

var currentShape = generateShape();

function generateShape () {
  var shapes    = [jShape, oShape, iShape, lShape, tShape, sShape, zShape];
  var shape = _.sample(shapes);

  return new shape(gameBoard);
}

requestAnimationFrame(function gameLoop() {
  if (!currentShape) {
    generateShape();
  } 

  context.clearRect(0, 0, canvas.width, canvas.height);
  gameBoard.draw(context);

  if (!currentShape.canMoveDown()) {
    _.each(currentShape.pieces, function(piece) {
      piece.locked = true;
    });

    gameBoard.checkRows();
    currentShape = generateShape();
  }

  currentShape.moveDown();

  setTimeout(function() {
    requestAnimationFrame(gameLoop);
  }, 500);
});



// Key Bindings
$(document).keydown(function(event) {
  switch(event.which) {
    case 37: // left
    currentShape.moveLeft();
    resetBoard(); // Refresh board if piece moves
    break;

    case 38: // up
    currentShape.rotate();
    resetBoard();
    break;

    case 39: // right
    currentShape.moveRight();
    resetBoard();
    break;

    case 40: // down
    currentShape.moveDown();
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