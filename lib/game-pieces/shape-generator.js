var _      = require('lodash');
var jShape = require('./j-shape.js');
var lShape = require('./L-shape.js');
var oShape = require('./o-shape.js');

function shapeGenerator (board) {
  var shapes = [jShape(board), lShape(board), oShape(board)];
  return _.sample(shapes);
}