var $       = require('jQuery');
var canvas  = document.getElementById('game');
var context = canvas.getContext('2d');
var Board   = require('./board.js');
var _       = require('lodash');

var gameBoard     = new Board();
var currentShape  = gameBoard.generateShape();
var nextShape     = gameBoard.nextShape;
var gameSpeed     = 5;
var scoreModifier = 100;

$('#score').text(gameBoard.score);

requestAnimationFrame(function gameLoop() {
  if (!currentShape && gameBoard.gameOver === false) {
    gameBoard.generateShape();
    showNextShape();
  } else if (gameBoard.gameOver === true) {
    gameOver();
  } else {

    showNextShape();
    context.clearRect(0, 0, canvas.width, canvas.height);
    gameBoard.draw(context);

    // lock pieces when they bottom out
    if (!currentShape.canMoveDown()) {
      _.each(currentShape.pieces, function(piece) {
        piece.locked = true;
      });

      // Hide the previous next shape image
      resetNextShape();

      // Check board for full rows
      gameBoard.checkRows();

      // Reset current and next shape 
      currentShape = gameBoard.generateShape();
      nextShape    = gameBoard.nextShape;

      updateScore();
      showNextShape();
    }

    currentShape.moveDown();

    setTimeout(function() {
      requestAnimationFrame(gameLoop);
    }, gameSpeed * 100);
  }
});

function resetNextShape () {
  $('#' + gameBoard.nextShape.name).hide();
}
function showNextShape () {
  $('#' + gameBoard.nextShape.name).show();
}

function gameOver () {
  $('#game-over').text("Game Over!");
}

function updateScore () {
  $('#score').text(gameBoard.score * scoreModifier);
  updateGameSpeed();
}

// Modifiy game speed based on current score
function updateGameSpeed() {
  var score = gameBoard.score;
  if (score < 5) {
    gameSpeed = 5;
  } else if (score >= 5 && score < 10) {
    gameSpeed = 4;
    scoreModifier = 150;
  } else if (score >= 10 && score < 20){
    gameSpeed = 3;
    scoreModifier = 175;
  } else if (score >= 20 && score < 30) {
    gameSpeed = 2.5;
    scoreModifier = 200;
  } else if (score >= 30 && score < 40) {
    gameSpeed = 2;
    scoreModifier = 250;
  } else {
    gameSpeed = 1;
    scoreModifier = 300;
  }
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
