var WIDTH = 600;
var HEIGHT = 400;
var loadLevel = function(x) {
	var level = levels[x - 1];
	var blocks = [];
	for(var i = 0; i < level.length; i++) {
		blocks.push(Block(level[i]));
	}
	return blocks;
}

var __main = function() {
	
	var brick = Brick();
	var ball = Ball();
	var game = Game(60, ball);
	var blocks = loadLevel(1);
	var score = 0;		    
    game.registerAction('a', function(){
    	brick.moveLeft();
    })
    game.registerAction('d', function(){
    	brick.moveRight();
    })
    game.registerAction('g', function() {
    	ball.fire();
    })
    window.addEventListener('keydown', function(e){
    	var k = e.key;
    	if ('1234567'.includes(k)) {
    		blocks = loadLevel(Number(k));
    	}
    })

    game.update = function() {
    	if(rectIntersect(brick, ball)) {
    		ball.speedY = -ball.speedY;
    	}
    	for (i = 0; i < blocks.length; i++){
    		if(blocks[i].alive && rectIntersect(blocks[i], ball)) {
	    		ball.speedY = -ball.speedY;
	    		blocks[i].kill();
	    		score += 100;
	    		break;
	    	}	
    	}
    	
    	ball.move();
    }
    game.draw = function() {
    	game.ctx.fillStyle = '#554';
    	game.ctx.fillRect(0, 0, WIDTH, HEIGHT);
    	game.drawImage(brick);
    	game.drawImage(ball);
    	for (i = 0; i < blocks.length; i++) {
    		if (blocks[i].alive) {
	    		game.drawImage(blocks[i]);
	    	}
    	}
    	game.ctx.fillText('Hello:' + score, 0, HEIGHT - 20);
    }
    game.drawEnd = function() {
    	
    	game.ctx.fillText('Game Over!', 0, HEIGHT - 20);
    }
}
