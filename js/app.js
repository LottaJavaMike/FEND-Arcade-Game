// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to instances
    this.x = x;
    this.y = y;
    this.speed = 150;
    this.sprite = 'images/enemy-bug.png';
};
// Updates the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = (dt * this.speed) + this.x;
    if (player.x > this.x + 100 && player.x > this.x - 50){
      if (player.y > this.y - 55 && player.y + 50){
        player.reset();
      }
    }
//returns the player to start if off the screen
    if (this.x > 600){
      this.x = (-400) * Math.random();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player class
var Player = function() {
  this.x = 200;
  this.y = 350;
  this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(){

};
Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.reset = function(){
  this.x = 200;
  this.y = 350;
};
Player.prototype.handleInput = function(key){
  switch (key) {
    case 'left':
      if (this.x > 0){
        this.x -= 100;
      }
      break;
    case 'right':
      if (this.x < 401){
        this.x -= 100;
      }
      break;
    case 'up':
      if (this.y > 0){
        this.y += 50;
      }
      break;
    case 'down':
      if (this.y < 400){
        this.y -=50;
      }
      break;
    }
};

//instantiate objects.
var allEnemies = [];
for (var i = 0; i < 5; i++){
  allEnemies.push(new enemy());
}
var Player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
