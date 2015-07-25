var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


 function Block(x, y, width, height) {
  this.x      = x;
  this.y      = y;
  this.width  = width;
  this.height = height;
 }

 Block.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
 };

 Block.prototype.move = function () {
  if (this.y + this.height < canvas.height) { this.y++ ; }

  return this;  // By adding this, you can chain methods
 };

 // Block.prototype.moveUp = function () {
 //  if (this.y - this.height > 0) { this.y-- ; }
 //  return this;  // By adding this, you can chain methods
 // };

 var blocks = [];

 var specialBlock = new Block(10, 10, 25, 25);
 specialBlock.move = function() {
  this.x++;
  Object.getPrototypeOf(this).move.call(this);
  return this;
 };

 blocks.push(specialBlock);

 canvas.addEventListener('click', function() {
  var pos   = getClickPosition(event); // Event has a lot of properties
  var block = new Block(pos.x, pos.y, 25, 25);
  var block2 = new Block(pos.x + 50, pos.y + 50, 25, 25);
  blocks.push(block);
  blocks.push(block2);
 });

 blocks.push(new Block(25, 25, 25, 25));
 blocks.push(new Block(50, 50, 25, 25));
 blocks.push(new Block(75, 75, 25, 25));
 blocks.push(new Block(200, 100, 25, 25));
 blocks.push(new Block(100, 100, 25, 25));
 blocks.push(new Block(75, 75, 25, 25));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  blocks.forEach(function(block) { block.draw().move(); } );
  requestAnimationFrame(gameLoop);
});
