var Brick = function() {
	var image = imageFromPath('brick.png');
	var o = {
		image: image,
		x: 150,
		y: 300,
		speed: 10,
	};
	o.moveLeft = function() {
		o.x -= o.speed;
		if (o.x < 0) {
			o.x = 0;
		}
	}
	o.moveRight = function() {
		o.x += o.speed;
		if (o.x + o.image.width >= WIDTH) {
			o.x = WIDTH - o.image.width;
		}
	}
	return o;
}