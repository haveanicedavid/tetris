function squarePiece () {
  this.topLeftOrigin = {row: 0, col: 4};
  this.shape = [
    [1, 1],
    [1, 1]
  ];
}



// TODO: Collission detection
// TODO: Only move downward if the following value:
  // 1: exists
  // 2: is a 0
squarePiece.prototype.moveDown = function () {
  this.topLeftOrigin.row += 1;
};

squarePiece.prototype.moveLeft = function () {
  this.topLeftOrigin.col -= 1;
};


module.exports = squarePiece;