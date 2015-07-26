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
var shape = new tShape(gameBoard);



gameBoard.draw(context);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  gameBoard.draw(context);
  shape.moveDown();

  setTimeout(function() {
    shape.rotate();
    requestAnimationFrame(gameLoop);
  }, 500);
});
