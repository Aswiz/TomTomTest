setInterval(function(){
	var rings = document.getElementById('rings');
	rings.setAttribute("style", "display: none;");
	loadAccidents();
},120000);

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("main-header").style.display = "block";
	document.getElementById("app").style.display = "block";
	document.getElementById("footer").style.display = "block";
}

function draw(accidents) {
	try {
		deleteLiElements();
		createLiElements(accidents);
		deleteSvgIcons();
		createSvgIcons(accidents);
	}
	catch (e) {
		console.log(e);
	}
}


function test() {
	window.addEventListener("load", function(event) {
		SvgMap();
		loadAccidents();

		setTimeout(function () {
			showPage();
		},500);
	});
}
test();
