var $ = jQuery;

export const onehundredmoney = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 256,
		initial = fontSize;

	var lines = [
		'$100',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});

}

export const loan = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 256,
		initial = fontSize;

	var lines = [
		'loan',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});

}

export const apr = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 256,
		initial = fontSize;

	var lines = [
		'0% APR',
	];

	ctx.font = "bold " + fontSize + "px Gotham Rounded";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});

}

export const interest = function(ctx, canvas) {

	var lineHeight = 16,
		fontSize = 64,
		initial = fontSize;

	var lines = [
		'interest',
		'loan fees',
		'credit check',
		'catch',
	];

	ctx.font = fontSize + "px Avenir LT Std";
	ctx.fillStyle = 'white';

	$.each(lines, function(key, line){
		ctx.fillText(line, 0, ((fontSize + lineHeight) * key) + initial);
	});

}
