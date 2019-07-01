var $ = jQuery;

export const draw = function (drawCallback, transparent = false) {
	if (!drawCallback) {return }
	var elements = drawCallback.name !== undefined ? $('.canvas-' + drawCallback.name): []
	// console.log(elements);
	
	$.each(elements, function(key, canvas) {

		if(canvas == undefined) { return false; }

		if (!canvas.getContext) { return false; }
		
		var ctx = canvas.getContext('2d');

		if (transparent) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = 'white';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.globalCompositeOperation = 'destination-out';
		}

		ctx.save();
		drawCallback(ctx, canvas);
		ctx.restore();

	})

	return true;
}

export const drawTransparent = function(drawCallback)
{
	return draw(drawCallback, true);
}

export const write = function(ctx, text, fontSize = 156, lineHeight = 16, font = "sans", bold = "") 
{	
	var initial = fontSize;

	if (font == "comic") {
		font = "Gotham Rounded";
	}else {
		font = "Avenir LT Std";
	}

	ctx.font = bold + " " + fontSize + "px " + font;
	ctx.fillStyle = 'white';

	ctx.fillText(text, 0, fontSize);
}