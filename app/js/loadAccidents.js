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
				createLiElements(accidents);
			} catch (e) {
				alert( "Error " + e.message );
			}
		}
	};
}

function createLiElement(element) {
	var liElement = document.createElement('li');
	liElement.className = "mdc-list-item";
	liElement.innerHTML =
			"<span class=\"mdc-list-item__graphic material-icons md-36 orange600\" aria-hidden=\"true\">error</span>\n" +
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
function createLiElements(element) {
	var ulElement = document.getElementById("accidentsList");
	var liElement;
	element.forEach(function(elementI){
		liElement = createLiElement(elementI);
		ulElement.insertBefore(liElement,ulElement.firstChild);
	});
}
