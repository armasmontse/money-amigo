var $ = jQuery;

export const mouchmore = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 156,
		initial = fontSize;

	var lines = [
		'and much',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((85 + lineHeight) * key) + initial);
	});
}

export const m = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 156,
		initial = fontSize;

	var lines = [
		'm',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((85 + lineHeight) * key) + initial);
	});
}

export const re = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 156,
		initial = fontSize;

	var lines = [
		're',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((85 + lineHeight) * key) + initial);
	});
}

export const tocome = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 156,
		initial = fontSize;

	var lines = [
		'to come',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((85 + lineHeight) * key) + initial);
	});
}

export const waitandsee = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'just wait and see...',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((85 + lineHeight) * key) + initial);
	});
}