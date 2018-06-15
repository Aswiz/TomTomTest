function SvgMap() {
	var svg = document.getElementById("svgMap"),
			svgBackground = document.getElementById("svgMapBackground"),
			maxWidthPx = 3094,
			maxHeightPx = 1560,
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

	svg.setAttribute("height",Math.round(svg_height));
	svg.setAttribute("width",Math.round(svg_width));
	svgBackground.setAttribute("height",svg_height);
	svgBackground.setAttribute("width",svg_width);

}

function deleteSvgIcons() {
	var svgMap = document.getElementById("svgMap"),
			countIcons = svgMap.children.length;

	for (var i = 0; i < countIcons - 2; i++)
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
		var svgIcon = createSvgIcon(accidentsObject[i],i);
		svgMap.insertBefore(svgIcon,svgMap.lastChild);
	});
}

function createSvgIcon(liElement, i) {
	var self = this,
			positionIcon = calculatedPositon(liElement),
			typeIcon = typeAccidents(liElement),
			svgIconPath = typeSvgIcon(typeIcon),
			maxWidthPx = 3094,
			maxHeightPx = 1560,
			scale_img = window.innerWidth / maxWidthPx * 0.75,
			IconSize = 36 * scale_img*2.5;



	if (window.innerWidth <= 1200)
	{
		scale_img = window.innerWidth / maxWidthPx;
		IconSize = 36 * scale_img*3;

	}
	else  if (window.innerWidth>=2000)
		IconSize = 36 * scale_img*2;

	var rings = document.getElementById("rings");
	rings.setAttribute("width", IconSize*2);
	rings.setAttribute("height", IconSize*2);

	var svgIcon;
	svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svgIcon.className = "svgIcon";
	svgIcon.id = "svgIcon" + i;
	svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svgIcon.setAttribute("width", IconSize);
	svgIcon.setAttribute("height", IconSize);
	svgIcon.setAttribute("viewBox", "0 0 24 24");
	svgIcon.setAttribute("x", positionIcon.x * scale_img);
	svgIcon.setAttribute("y", positionIcon.y * scale_img);
	svgIcon.innerHTML = svgIconPath;
	svgIcon.addEventListener('click', function () {
		changeColorSvgIcons(i);
	});
	return svgIcon;
}

function changeColorSvgIcons(i) {
	var svgMap          = document.getElementById("svgMap"),
			countIcons      = svgMap.children.length - 2,
			accidentsList   = document.getElementById("accidentsList"),
			countLiElements = accidentsList.children.length;

	for (var j = 0; j < countLiElements; j++)
	{
		hideDetails(accidentsList.children[j]);
	}
	for (var j = 2; j < countIcons + 2; j++)
	{
		svgMap.children[j].children[1].setAttribute("fill","#DF1A26");
	}

	svgMap.children[i+2].children[1].setAttribute("fill","#02A2A5");

	var rings  = document.getElementById("rings");
	var svgMapH = Math.round(svgMap.children[i+2].getAttribute("height")),
			svgMapW = Math.round(svgMap.children[i+2].getAttribute("width")),
			ringsX = svgMap.children[i+2].getAttribute("x") - svgMapW/2 - 0.5,
			ringsY = svgMap.children[i+2].getAttribute("y") - svgMapH/2 - 0.5;

	rings.setAttribute("x",ringsX);
	rings.setAttribute("y",ringsY);
	rings.setAttribute("style", "display: block;")
	showDetails(accidentsList.children[i]);
}

function typeSvgIcon(type)
{
	var svgIconPath,
			Path = "<path d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
			error = "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\" fill=\"#DF1A26\" stroke='rgba(0, 0, 0, 0.2)'></path>",
			remove_circle = "<path d=\"M0 0h24v24H0zm11.75 11.47l-.11-.11z\" fill=\"none\"/></path>\n" +
											"<path fill=\"#DF1A26\" stroke='rgba(0, 0, 0, 0.25)' d=\"M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z\"></path>",
			report_problem = "<path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\" fill=\"#DF1A26\" stroke='rgba(0, 0, 0, 0.3)'></path>";
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


