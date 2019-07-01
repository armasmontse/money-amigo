var $ = jQuery;

export const hidden = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'hidden fees',
		'minimum deposit',
		'minimum balance',
		'attitude',
		'limits'
	];

	ctx.font = fontSize + "px Avenir LT Std";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}