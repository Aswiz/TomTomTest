function SvgMap() {
	var svg = document.getElementById("svgMap"),
			svgBackground = document.getElementById("svgMapBackground"),
			maxWidthPx = 3094,
			maxHeightPx = 1560,
			// ctx = canvas.getContext("2d"),
			img = document.getElementById("img"),
			scale_img = window.innerWidth / maxWidthPx * 0.75,
			typeIcon = "error",
			svg_width = window.innerWidth * 0.75,
			svg_height = maxHeightPx * scale_img;

	if (window.innerWidth <= 1200)
	{
		scale_img = window.innerWidth / maxWidthPx;
		svg_width = window.innerWidth;
		svg_height = maxHeightPx * scale_img;
	}

	svg.setAttribute("height",svg_height);
	svg.setAttribute("width",svg_width);
	svgBackground.setAttribute("height",svg_height);
	svgBackground.setAttribute("width",svg_width);

}

function deleteSvgIcons() {
	var svgMap = document.getElementById("svgMap"),
			countIcons = svgMap.children.length,
			k=0;

	console.log(countIcons);
	for (var i = 0; i < countIcons - 1; i++)
	{
			svgMap.removeChild(svgMap.children[1]);
	}
}

function createSvgIcons(accidentsObject) {
	var svgMap = document.getElementById("svgMap"),
			maxWidthPx = 3094,
			maxHeightPx = 1560,
			scale_img = window.innerWidth / maxWidthPx * 0.75;
	accidentsObject.forEach(function (element,i) {
		var svgIcon = createSvgIcon(accidentsObject[i]);
		svgMap.insertBefore(svgIcon,svgMap.lastChild);
	});
}

function createSvgIcon(liElement) {
	var positionIcon = calculatedPositon(liElement),
			typeIcon = typeAccidents(liElement),
			svgIconPath = typeSvgIcon(typeIcon),
			maxWidthPx = 3094,
			maxHeightPx = 1560,
			scale_img = window.innerWidth / maxWidthPx * 0.75,
			IconSize = 36 * scale_img*2.5;

	if (window.innerWidth <= 1200)
	{
		scale_img = window.innerWidth / maxWidthPx;
	}

	var svgIcon;
	svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svgIcon.className = "svgIcon";
	svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svgIcon.setAttribute("width", IconSize);
	svgIcon.setAttribute("height", IconSize);
	svgIcon.setAttribute("viewBox", "0 0 24 24");
	svgIcon.setAttribute("x", positionIcon.x * scale_img);
	svgIcon.setAttribute("y", positionIcon.y * scale_img);
	svgIcon.innerHTML = svgIconPath;
	return svgIcon;
}

function typeSvgIcon(type)
{
	var svgIconPath,
			Path = "<path d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
			error = "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\" fill=\"#ED1C24\" stroke='rgba(0, 0, 0, 0.2)'></path>",
			remove_circle = "<path d=\"M0 0h24v24H0zm11.75 11.47l-.11-.11z\" fill=\"none\"/></path>\n" +
											"<path fill=\"#AF00A0\" stroke='rgba(0, 0, 0, 0.25)' d=\"M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z\"></path>",
			report_problem = "<path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\" fill=\"#F1DD1C\" stroke='rgba(0, 0, 0, 0.3)'></path>";
	switch (type){
		case "warning": svgIconPath = Path + report_problem; break;
		case "error": svgIconPath = Path + error; break;
		case "location_off": svgIconPath = remove_circle; break;
		default:
			svgIconPath = error;
	}
	return svgIconPath;
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


