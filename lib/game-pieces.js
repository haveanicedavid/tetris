exports = (typeof window === 'undefined') ? global : window; // WTF is this doing?

exports.gamePieces = {


  squarePiece : function () {
    this.topLeftOrigin = {row: 0, col: 4};
    this.shape = [
      [1, 1],
      [1, 1]
    ];
    return;
  },

  lPiece : function () {
    this.topLeftOrigin = {row: 0, col: 4};
    this.shape = [
      [0, 1],
      [0, 1],
      [1, 1]
    ];
  }
};
