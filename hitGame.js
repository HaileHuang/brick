var Game = function(fps, ball) {
	var g = {
		actions: {},
		keydowns: {},
	};
	var canvas = document.getElementById('id-canvas');
	var ctx = canvas.getContext('2d');
	g.canvas = canvas;
	g.ctx = ctx;
	g.drawImage = function(img) {
		g.ctx.drawImage(img.image, img.x, img.y);
	}
	g.registerAction = function(key, callback) {
		g.actions[key] = callback;
	}
	window.addEventListener('keydown', function(e) {
		g.keydowns[e.key] = true;
	})
	window.addEventListener('keyup', function(e) {
		g.keydowns[e.key] = false;
	})
	setInterval(function(){
		for (var key in g.actions) {
			if (g.keydowns[key]) {
				g.actions[key]();
			}
		}
		g.ctx.clearRect(0, 0, g.canvas.width, g.canvas.height);
		log(ball.y + ball.image.height, HEIGHT);
		if (ball.y + ball.image.height > HEIGHT) {
			g.drawEnd();
			return;
		} else {
			g.update();
			g.draw();
		}
	}, 1000/fps)
	return g;
}