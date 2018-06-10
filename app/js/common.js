var myObj

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		myObj = JSON.parse(this.responseText);
		// accidentsData = myObj;
		console.log(myObj);
	}
};
xmlhttp.open("GET", "js/incidents.json", true);
xmlhttp.send();

function coutChildrens(element) {
	for (var i = 0; i < element.childNodes.length; i++) {
		console.log( element.childNodes[i] );
	}
}

function searchLiElement(element) {
	while (element.className.includes("mdc-list-item mdc-list-item_selected"))
	{
		if (element.className.includes("mdc-list-item mdc-list-item_selected"))
			return element;
		element=element.parentNode;
		console.log(element);
	}
	return null;
}

function isElementIncludesString(element, string) {
	if ((element!==null)&&(element!==undefined))
	{
		if (element.className.includes(string))
			return true;
		else return false;
	}
	return false;
}

function searchIconArrow(element) {
// var i=1;
// if (isElementIncludesString(element.childNodes[i],"mdc")) {
// 	console.log(1);
// }
// console.log(element);
	for (var i = 0; i < element.childNodes.length; i++) {
		if (isElementIncludesString(element.childNodes[i], "mdc-list-item__meta material-icons md-48")) {
			console.log(1);
			console.log(element);
		}
	}
	// if (element.childNodes[i].className.includes("mdc"))
	// 	console.log("True");
	// while(isElementIncludesString(element,"mdc-list-item__meta material-icons md-48"))
	// {
	// 	i++;
	// }
	return element.childNodes[i];
}
function handler(event) {
	console.log("Кнопка нажата.");
	var liElement = searchLiElement(event.target);
	console.log("liElement = ");
	console.log(liElement);

	// var IconArrow = searchIconArrow(liElement);
	// console.log(IconArrow);
	// changedHeight(liElement);
	// changingIcon(IconArrow);
}
function changedHeight(element) {
	if (element.className==="mdc-list-item_selected")
		element.classList.remove("mdc-list-item_selected");
	// if (element.className!=="mdc-list-item_selected")
	// 	element.classList.add("mdc-list-item_selected");

	console.log(element.classList);
}
function changingIcon(element) {
	switch (element.textContent){
		case "clear":
			element.textContent = "arrow_drop_down";
			break;
		case "arrow_drop_down":
				element.textContent = "clear";
		break;
	}
}





var icon_selector = document.querySelector(".mdc-list");


icon_selector.addEventListener("click", handler);


// console.log(accidentsData);

// document.getElementById("demo").innerHTML = myObj[0].id;
// function myFunction() {
// 	document.getElementById("demo").innerHTML = "Paragraph changed!";
// }

// console.log(accidentsData);

