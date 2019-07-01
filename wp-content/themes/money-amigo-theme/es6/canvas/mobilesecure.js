var $ = jQuery;

export const mobilesecure = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 156,
		initial = fontSize;

	var lines = [
		'mobile',
		'secure'
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((85 + lineHeight) * key) + initial);
	});
}

export const ampersand = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 156,
		initial = 115;

	var lines = [
		'&',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((85 + lineHeight) * key) + initial);
	});
}

export const issafe = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'your money is safe,',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((85 + lineHeight) * key) + initial);
	});
}

export const ensured = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'secure and FDIC insured',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((85 + lineHeight) * key) + initial);
	});
}