// window.onload = loadAccidents();
setInterval(function(){
	deleteLiElements();
	loadAccidents();
},160000);

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("headTitle").style.display = "block";
	document.getElementById("app").style.display = "block";
}

function test() {
	var image = document.getElementById("img"),
			materialIcons = document.getElementById("material-icons");

	image.addEventListener("load", function(event) {
		// console.log("All resources finished loading!");
		loadAccidents();
		setTimeout(function () {
			showPage();
		},500);
	});



	// materialIcons.addEventListener("load", function(event) {
	// 	console.log("All ICON resources finished loading!");
	// 	loadAccidents();
	// });
}

test();
