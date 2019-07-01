var $ = jQuery;

export const twocards = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 156,
		initial = fontSize;

	var lines = [
		'two cards.',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const twooptions = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 156,
		initial = fontSize;

	var lines = [
		'two options.',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}