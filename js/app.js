// Creating our enemies
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed *dt;
    // Resets enemy location if off canvas
    if(this.x > 510){
        this.x = -105;
    }
    // Collision detection
    if(player.x < this.x + 80 &&
		player.x + 80 > this.x &&
		player.y < this.y + 60 &&
		60 + player.y > this.y) {
		player.reset();
	}
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Creating the player
var Player = function(x, y) {
    this.x = 202;
    this.y = 405;
    this.player = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
// Resets the player starting location
Player.prototype.reset = function() {
    this.x = 202;
    this.y = 405;
};

Player.prototype.handleInput = function(keyPress){
    if(keyPress == 'left' && this.x > 0){
        this.x -= 102;
    };
    if(keyPress == 'right' && this.x < 405){
        this.x += 102;
    };
    if(keyPress == 'up' && this.y > 0){
        this.y -= 83;
    };
    if(keyPress == 'down' && this.y < 405){
        this.y += 83;
    };
    // When player reaches top, resets location of player and enemies
    if(this.y < 0){
        setTimeout(() => {
            this.x = 202;
            this.y = 405;
            allEnemies.length = 0;
            enemyStart.forEach(function(locationY){
                enemy = new Enemy(0, Math.random() * 184 + 55, Math.random() * 128);
                allEnemies.push(enemy);
            });
        }, 800);
    };
};
//put enemies into an array
var allEnemies = [];
var enemyLocation = [63, 147, 230];
enemyLocation.forEach(function (locationY) {
	enemy = new Enemy(0, locationY, 200);
	allEnemies.push(enemy);
});

var player = new Player(202, 405);



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