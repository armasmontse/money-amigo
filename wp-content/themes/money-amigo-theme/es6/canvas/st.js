var $ = jQuery;

export const st = function(ctx, canvas) {

	var lineHeight = 0,
		fontSize = 256,
		initial = fontSize;

	var lines = [
		'st',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}