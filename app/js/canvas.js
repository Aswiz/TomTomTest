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
	var canvas = document.getElementById("canvas_map"),
			ctx = canvas.getContext("2d"),
			img = document.getElementById("img"),
			scale_img = window.innerWidth / maxWidthPx * 0.75;
	canvas.width = window.innerWidth * 0.75;
	canvas.height = maxHeightPx * scale_img;
	ctx.drawImage(img, 0, 0, maxWidthPx*scale_img, maxHeightPx*scale_img);

	accidents.forEach(function (element,i) {
		positionIcon = calculatedPositon(accidents[i]);
		var typeIcon = typeAccidents(accidents[i]),
				iconColor = colorIcon(typeIcon),
				fontSize = 36 * scale_img*2 + "px";
		ctx.font = fontSize + " Material Icons";
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
