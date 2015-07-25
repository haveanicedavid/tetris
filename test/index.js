var assert   = require('chai').assert;

require('./board_test');
require('./game_test');
require('./piece_test');
require('./shape_test');
require('./rotation-test/j-shape-rotation_test.js');
require('./rotation-test/o-shape-rotation_test.js');

describe('my test suite', function () {
  it('should work', function () {
    assert(true);
  });
});
