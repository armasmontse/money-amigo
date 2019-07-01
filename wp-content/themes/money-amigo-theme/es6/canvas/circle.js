export const circle = function(ctx, canvas) {
	
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var radius = canvas.height / 2;

	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	ctx.fill();
}