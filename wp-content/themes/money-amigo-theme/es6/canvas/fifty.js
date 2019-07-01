var $ = jQuery;

export const fifty = function(ctx, canvas) {
	
	var lineHeight = 16,
		fontSize = 256,
		initial = fontSize;

	var lines = [
		'360,000+',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
	
}