var $ = jQuery;

export const include = function(ctx, canvas) {

	var lineHeight = 0,
		fontSize = 128,
		initial = 100;

	var lines = [
		'includes',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}