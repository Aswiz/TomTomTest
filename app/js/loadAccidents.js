function loadAccidents() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'js/incidents.json', true);
	xhr.send();

	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) return;

		if (xhr.status !== 200) {
			alert( xhr.status + ': ' + xhr.statusText );
		} else {
			try {
				var accidents = JSON.parse(xhr.responseText);
				draw(accidents);
			} catch (e) {
				alert( "Error " + e.message );
			}
		}
	};
	// console.log("Load!");
}

function draw(accidents) {
	deleteLiElements();
	createLiElements(accidents);
	var canvas = new Canvas();
	canvas.clear();
	canvas.startDraw(accidents);
	setTimeout(function () {
		canvas.clearIcons();
		canvas.drawIcons(accidents);
	},10);



	var materialIcons = document.getElementById("material-icons");
	materialIcons.addEventListener("load", function(event) {
		console.log("All ICON resources finished loading!");

	});
}

function typeAccidents(element) {
	var type;
	switch (element.type){
		case 1: type = "error"; break;
		case 2: type = "warning"; break;
		case 3: type = "location_off"; break;
		default:
			type = "clear";
	}
	return type;
}
function colorIcon(type)
{
	var color;
	switch (type){
		case "warning": color = "#C30000"; break;
		case "error": color = "#A423FF"; break;
		case "location_off": color = "#0200AB"; break;
		default:
			color = "#000000";
	}
	return color;
}

function createLiElement(element) {

	var typeLiSpan = typeAccidents(element);
			liElement = document.createElement('li');
			liElement.className = "mdc-list-item";
			liElement.innerHTML =
			"<span class=\"mdc-list-item__graphic material-icons md-36 orange600\" aria-hidden=\"true\">" + typeLiSpan + "</span>\n" +
			"<span class=\"mdc-list-item__text\">" + element.details + " on " + element.from + "\n" +
			"<span class=\"mdc-list-item__secondary-text\">" + element.id + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text secondary-text__hidden\">Type : " + element.type + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text secondary-text__hidden\">Position : x: " + element.point.x + ", y: " + element.point.y + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text secondary-text__hidden\">From: " + element.from + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text secondary-text__hidden\">To: " + element.to + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text secondary-text__hidden\">Details: " + element.details + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text secondary-text__hidden\">Delay: " + element.delay + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text secondary-text__hidden\">Magnitude: " + element.magnitude + "</span>\n" +
			"</span>\n" +
			"<span class=\"mdc-list-item__meta material-icons md-36\" aria-hidden=\"true\">arrow_drop_down</span>";
	liElement.onclick = changeState;
	return liElement;
}

function deleteLiElements() {
	var ulElement = document.getElementById("accidentsList"),
			countLiElements = ulElement.children.length;

	for (var i = 0; i < countLiElements; i++)
	{
		ulElement.removeChild(ulElement.children[0]);
	}
	var canvas = new Canvas();
	canvas.clearIcons();
	// console.log(countLiElements);

}
function createLiElements(element) {
	var ulElement = document.getElementById("accidentsList");
	var liElement;
	sortingAccidentList(element);
	element.forEach(function(elementI){
		liElement = createLiElement(elementI);
		ulElement.insertBefore(liElement,ulElement.firstChild);
	});
}
