var $ = jQuery;

export const cash = function(ctx, canvas) {
	var lineHeight = 0,
		fontSize = 156,
		initial = fontSize;

	var lines = [
		'cash',
		'back'
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const onevery = function(ctx, canvas) {
	var lineHeight = 0,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'on',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const things = function(ctx, canvas) {
	var lineHeight = 0,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'things',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const youcashback = function(ctx, canvas) {
	var lineHeight = 0,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'you',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const buycashback = function(ctx, canvas) {
	var lineHeight = 0,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'buy!',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}