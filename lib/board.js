function Board () {
  this.board = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
  ];
}

function squarePiece () {
  this.topLeft = {row: 0, col: 4};
  this.shape = [
    [1, 1],
    [1, 1]
  ];
}

Board.prototype.draw = function(piece) {
    this.board[piece.topLeft.row][piece.topLeft.col] = piece.shape[0][0];
    this.board[piece.topLeft.row + 1][piece.topLeft.col] = piece.shape[1][0];
    this.board[piece.topLeft.row][piece.topLeft.col + 1] = piece.shape[0][1];
    this.board[piece.topLeft.row + 1][piece.topLeft.col + 1] = piece.shape[1][1];
};

var bob = new Board();
bob.draw(new squarePiece());
console.log(bob.board);

module.exports = Board;

