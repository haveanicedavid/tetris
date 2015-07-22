function Board () {
  this.setBoard = [
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


Board.prototype.draw = function(piece) {
    var y = piece.shape.length; // 2
    var x = piece.shape[0].length; // 2

    for (var i = 0; i < y; i ++) {
        for (var j = 0; j < x; j++ ) {
            this.setBoard[piece.topLeft.row + i][piece.topLeft.col + j] = piece.shape[i][j];
        }
    }    

    // this.board[piece.topLeft.row][piece.topLeft.col] = piece.shape[0][0];
    // this.board[piece.topLeft.row + 1][piece.topLeft.col] = piece.shape[1][0];
    // this.board[piece.topLeft.row][piece.topLeft.col + 1] = piece.shape[0][1];
    // this.board[piece.topLeft.row + 1][piece.topLeft.col + 1] = piece.shape[1][1];
};

// var bob = new Board();
// bob.draw(new lPiece());
// console.log(bob.board);

module.exports = Board;

