// window.onload = loadAccidents();
setInterval(function(){
	deleteLiElements();
	loadAccidents();
},160000);



function test() {
	var image = document.getElementById("img"),
			materialIcons = document.getElementById("material-icons");

	image.addEventListener("load", function(event) {
		console.log("All resources finished loading!");
		loadAccidents();
	});
	// materialIcons.addEventListener("load", function(event) {
	// 	console.log("All ICON resources finished loading!");
	// 	loadAccidents();
	// });
}

test();
