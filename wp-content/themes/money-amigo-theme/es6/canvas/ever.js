var $ = jQuery;

export const ever = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 128,
		initial = fontSize;

	var lines = [
		'ever',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const metal = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 128,
		initial = fontSize;

	var lines = [
		'metal',
	];

	ctx.font = fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const cashback = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 128,
		initial = fontSize;

	var lines = [
		'cash back',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}