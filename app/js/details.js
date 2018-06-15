function removeHideClass(element) {
	for ( var i = 3; i < element.childNodes.length; i = i + 2 )
	{
		element.childNodes[i].classList.remove("secondary-text__hidden");
	}
}
function removeSelectedClass(liElement) {
	liElement.classList.remove("mdc-list-item_selected");
}
function changeIconToClear(spanIconElement) {
	spanIconElement.innerHTML = "clear";
}

function showDetails(selectedLiElement) {
	var hiddenSpans = selectedLiElement.childNodes[2],
			iconSpan = selectedLiElement.childNodes[4];

	addSelectedClass(selectedLiElement);
	removeHideClass(hiddenSpans);
	changeIconToClear(iconSpan);
}

//

function addHideClass(element) {
	for ( var i = 3; i < element.childNodes.length; i = i + 2 )
	{
		element.childNodes[i].classList.add("secondary-text__hidden");
	}
}
function addSelectedClass(liElement) {
	liElement.classList.add("mdc-list-item_selected");
}
function changeIconToArrow(spanIconElement) {
	spanIconElement.innerHTML = "arrow_drop_down";
}

function hideDetails(selectedLiElement) {
	var hiddenSpans = selectedLiElement.childNodes[2],
			iconSpan = selectedLiElement.childNodes[4];

	removeSelectedClass(selectedLiElement);
	addHideClass(hiddenSpans);
	changeIconToArrow(iconSpan);
}

// function changeState() {
// 	var accidentsList = document.getElementById("accidentsList"),
// 			countLiElements = accidentsList.children.length;
//
// 	for (var i = 0; i < countLiElements; i++)
// 	{
// 		hideDetails(accidentsList.children[i]);
// 	}
//
// 	if (!this.classList.contains("mdc-list-item_selected"))
// 	{
// 		showDetails(this);
// 	}
// }
