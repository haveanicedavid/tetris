// var squarePiece = require('./game-pieces/square-piece');
var Board = require('./board');
// var _ = require('lodash');

function Game () {
  this.board = new Board()
  // this.activePoint = board[y][x];
  // this.currentPiece = new squarePiece();
}

// Game.prototype.start = function () {
//   // initiate a timer
//     // Every half a second, have the piece move downward
//   _.times(10, function() {
//     setTimeout(function() {this.currentPiece.moveDown(); }, 500);
//   });
// };

module.exports = Game;