var Ball = function() {
	var image = imageFromPath('ball.png');
	var o = {
		image: image,
		x: 150,
		y: 280,
		speedX: 10,
		speedY: 10,
		fired: false,
	};
	o.fire = function() {
		o.fired = true;
	}
	o.move = function() {
		if (o.fired) {
			if (o.x < 0 || o.x + o.image.width > WIDTH) {
				o.speedX = -o.speedX;
			}
			if (o.y < 0 || o.y + o.image.height > HEIGHT) {
				o.speedY = -o.speedY;
			}
			o.x += o.speedX;
			o.y += o.speedY;
			}
	}
	return o;
}