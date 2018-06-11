function canvas(accidents) {
	var
			// W1px = 0.00034508963,
			// H1px = 0.00020789677,
			// minWidth = 12.94303529912,
			// maxWidth = 14.01074261434,
			maxWidthPx = 3094,
			// minHeight = 52.64611109803,
			// maxHeight = 52.32179213683,
			maxHeightPx = 1560;
			// WxPx = 1609,
			// HxPx = 790;
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
	});
}

function calculatedPositon(element) {
	var W1px = 0.00034508963,
			H1px = 0.00020789677,
			minWidth = 12.94303529912,
			minHeight = 52.64611109803,
			positionX = element.point.x,
			positionY = element.point.y,
			spanX,
			spanY,
			pointInPx = {
				x: 0,
				y: 0
			};
	spanX = positionX - minWidth;
	spanY = minHeight - positionY;
	pointInPx.x = Math.round(spanX / W1px);
	pointInPx.y = Math.round(spanY / H1px);
	return pointInPx;
}
