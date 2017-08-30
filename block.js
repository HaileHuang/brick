var Block = function(position) {
	var image = imageFromPath('block.png');
	var o = {
		image: image,
		x: position[0],
		y: position[1],
		w: 50,
		h: 20,
		alive: true,
	};
	o.kill = function() {
		o.alive = false
	}
	return o;
}