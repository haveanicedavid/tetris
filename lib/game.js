var _     = require('lodash');
var Board = require('./board');

function Game () {
  this.board = new Board();
}

Game.prototype.start = function () {
  // initiate a timer
    // Every half a second, have the piece move downward
  _.times(15, function() {
    setTimeout(function() {this.currentPiece.moveDown(); }, 500);
  });
};

module.exports = Game;