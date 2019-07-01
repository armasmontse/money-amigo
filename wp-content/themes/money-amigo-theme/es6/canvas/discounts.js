var $ = jQuery;

export const discounts = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 156,
		initial = fontSize;

	var lines = [
		'daily discounts',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const national = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'on national and local brands you love',
	];

	ctx.font = fontSize + "px Avenir LT Std";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const manymany = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'and many, many, many, more',
	];

	ctx.font = fontSize + "px Avenir LT Std";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}