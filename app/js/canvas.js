function canvas(accidents) {
	var W1px = 0.00034508963,
			H1px = 0.00020789677,
			minWidth = 12.94303529912,
			maxWidth = 14.01074261434,
			maxWidthPx = 3094,
			minHeight = 52.64611109803,
			maxHeight = 52.32179213683,
			maxHeightPx = 1560;

	var WxPx = 1609,
			HxPx = 790;

	var canvas = document.getElementById("canvas_map");
	canvas.width = window.screen.availWidth*0.75;
	canvas.height = window.screen.availHeight*0.80;
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("img"),
			scale_img = 0.465;
	ctx.drawImage(img, 0, 0, maxWidthPx*scale_img, maxHeightPx*scale_img);


	accidents.forEach(function (element,i) {
		positionIcon = calculatedPositon(accidents[i]);
		var typeIcon = typeAccidents(accidents[i]),
				iconColor = colorIcon(typeIcon);
		ctx.font = "36px Material Icons";
		ctx.fillStyle = iconColor;
		ctx.fillText(typeIcon, positionIcon.x*scale_img,positionIcon.y*scale_img);
		console.log(iconColor);
	});

}

function calculatedPositon(element) {
	var W1px = 0.00034508963,
			H1px = 0.00020789677,
			minWidth = 12.94303529912,
			minHeight = 52.64611109803;

	var positionX = element.point.x,
			positionY = element.point.y,
			spanX,
			spanY;
	var pointInPx = {
		x: 0,
		y: 0
	};

	spanX = positionX - minWidth;
	spanY = minHeight - positionY;

	pointInPx.x = Math.round(spanX / W1px);
	pointInPx.y = Math.round(spanY / H1px);

	return pointInPx;
}


// Wx = 13.498329
// Hx  = 52.481859
// widthX = Wx - w0-= 13.498329 - 12.94303529912 = 0.55529370088
// heightX = h0 - Hx -= 52.64611109803 - 52.481859 = 0.16425209803
// WxPx = widthX / 1pxW = 0.55529370088 / 0.00034508963 = 1609 px
// HxPx = heightX / 1pxH = 0.16425209803 / 0.00020789677 = 790 px