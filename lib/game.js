var canvas  = document.getElementById('game');
var context = canvas.getContext('2d');
var Board   = require('./board.js');
var jShape  = require('./game-pieces/j-shape.js');
var oShape = require('./game-pieces/o-shape.js');
var lShape = require('./game-pieces/L-shape.js');
var _ = require('lodash');

var gameBoard = new Board();
var jShape = new jShape(gameBoard);


gameBoard.draw(context);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  gameBoard.draw(context);
  jShape.moveDown();

  setTimeout(function() {
    requestAnimationFrame(gameLoop);
  }, 500);
});
