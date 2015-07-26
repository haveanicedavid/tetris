var $ = require('jQuery');
var canvas  = document.getElementById('game');
var context = canvas.getContext('2d');
var Board   = require('./board.js');
var _ = require('lodash');

var gameBoard = new Board();
var currentShape = gameBoard.generateShape();

$('#score').text(gameBoard.score);

requestAnimationFrame(function gameLoop() {
  if (!currentShape && gameBoard.gameOver === false) {
    gameBoard.generateShape();
  } else if (gameBoard.gameOver === true) {
    gameOver();
  } else {

    context.clearRect(0, 0, canvas.width, canvas.height);
    gameBoard.draw(context);

    // lock pieces when they hit the bottom
    if (!currentShape.canMoveDown()) {
      _.each(currentShape.pieces, function(piece) {
        piece.locked = true;
      });

      gameBoard.checkRows();
      currentShape = gameBoard.generateShape();
      updateScore();
    }

    currentShape.moveDown();

    setTimeout(function() {
      requestAnimationFrame(gameLoop);
    }, 500);
  }
});


function gameOver () {
  $('#game-over').text("Game Over!");
}

function updateScore () {
  // params.elements.remove();
  $('#score').text(gameBoard.score * 150);
}

function resetBoard () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  gameBoard.draw(context);
}

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
