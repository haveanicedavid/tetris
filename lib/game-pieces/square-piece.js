function squarePiece () {
  this.topLeft = {row: 0, col: 4};
  this.shape = [
    [1, 1],
    [1, 1]
  ];
}

function lPiece () {
  this.topLeft = {row: 0, col: 4};
  this.shape = [
    [0, 1],
    [0, 1],
    [1, 1]
  ];
}

squarePiece.prototype.moveDown = function () {
  
};


module.exports = squarePiece;