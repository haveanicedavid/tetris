exports = (typeof window === 'undefined') ? global : window; // WTF is this doing?

exports.gamePieces = {


  squarePiece : function () {
    this.topLeft = {row: 0, col: 4};
    this.shape = [
      [1, 1],
      [1, 1]
    ];
    return;
  },

  lPiece : function () {
    this.topLeft = {row: 0, col: 4};
    //TODO: Move shape contents to another array, with every possible combo
    this.shape = [
      [0, 1],
      [0, 1],
      [1, 1]
    ];
  }
};
