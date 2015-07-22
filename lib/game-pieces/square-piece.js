function squarePiece () {
  this.topLeft = {row: 0, col: 4};
  this.shape = [
    [1, 1],
    [1, 1]
  ];
}



squarePiece.prototype.moveDown = function () {
  this.topLeft.row += 1;
};


module.exports = squarePiece;