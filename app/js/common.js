var test;
function loadPhones() {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'js/incidents.json', true);

	xhr.send();

	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) return;

		if (xhr.status !== 200) {
			// обработать ошибку
			alert( xhr.status + ': ' + xhr.statusText );
		} else {
			try {
				var phones = JSON.parse(xhr.responseText);
			} catch (e) {
				alert( "Некорректный ответ " + e.message );
			}
			createLiElements(phones);
		}
	};
}

loadPhones();
//
//
//
function createLiElement(element) {
	var liElement = document.createElement('li');
	liElement.className = "mdc-list-item mdc-list-item_selected";
	liElement.innerHTML = "<span class=\"mdc-list-item__graphic material-icons md-36 orange600\" aria-hidden=\"true\">error</span>\n" +
			"<span class=\"mdc-list-item__text\">" + element.details + " on " + element.from + "\n" +
			"<span class=\"mdc-list-item__secondary-text\">" + element.id + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text\">Type : " + element.type + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text\">Position : x: " + element.point.x + ", y: " + element.point.y + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text\">From: " + element.from + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text\">To: " + element.to + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text\">Details: " + element.details + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text\">Delay: " + element.delay + "</span>\n" +
			"<span class=\"mdc-list-item__secondary-text\">Magnitude: " + element.magnitude + "</span>\n" +
			"</span>\n" +
			"<span class=\"mdc-list-item__meta material-icons md-48\" aria-hidden=\"true\">clear</span>";
	return liElement;
}
function createLiElements(element) {
	var ulElement = document.getElementById("accidentsList");
	var liElement;
	element.forEach(function(elementI){
		console.log(elementI);
		liElement = createLiElement(elementI);
		ulElement.insertBefore(liElement,ulElement.firstChild);
	});



	console.log(element[0].id);
}
