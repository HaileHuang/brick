var log = console.log.bind(console);
var rectIntersect = function(a, b) {
	minX = Math.max(a.x, b.x);
	minY = Math.max(a.y, b.y);
	maxXX = Math.min(a.x + a.image.width, b.x + b.image.width);
	maxYY = Math.min(a.y + a.image.height, b.y + b.image.height);
	return (minX <= maxXX && minY <= maxYY);
}
var imageFromPath = function(path) {
	var img = new Image();
	img.src = path;
	return img;
}