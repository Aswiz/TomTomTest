setInterval(function(){
	deleteLiElements();
	loadAccidents();
},120000);

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("headTitle").style.display = "block";
	document.getElementById("app").style.display = "block";
}

function draw(accidents) {
	deleteLiElements();
	createLiElements(accidents);
	SvgMap();
	deleteSvgIcons();
	createSvgIcons(accidents);
}


function test() {
	window.addEventListener("load", function(event) {
		loadAccidents();

		setTimeout(function () {
			showPage();
		},500);
	});
}
test();
