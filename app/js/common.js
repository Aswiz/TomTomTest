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
// console.log(accidentsData);

// document.getElementById("demo").innerHTML = myObj[0].id;


// console.log(accidentsData);

