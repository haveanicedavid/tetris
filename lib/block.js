function Block () {
  this.referencePoint = [0, 5];
  this.currentPosition = configurations.option1
  this.positionCheckers
}

Block.prototype.moveDown = function () {
  // For a game piece
    // Have each block look at the next space on the y axis
    // If that space is empty, move each block downward
      // If the piece immediately above the current block on the y axis is a 0, turn the current block into a 0
      // Else if the block immediately above the current block on teh y axis is a 1, keep it as a 1
  this.referencePoint[0] += 1;

};


var configurations = {
option1 : 
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  // this.setCheckerPoints()
option1 : 
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
option1 : 
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
option1 : 
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
  [ referencePoint[0 + 1], referencePoint[1] ] ,
}

module.exports = Block;