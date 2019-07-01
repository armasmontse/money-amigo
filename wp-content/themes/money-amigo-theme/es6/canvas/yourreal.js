var $ = jQuery;

export const yourreal = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'your real',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const realmetalcard = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 156,
		initial = fontSize;

	var lines = [
		'metal card',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}

export const replaceyourplastic = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'replace your old plastic relationship',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});
}
