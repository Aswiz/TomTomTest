var accidentsData;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		// document.getElementById("demo").innerHTML = myObj[0].id;
		accidentsData = myObj;
	}
	console.log(accidentsData);
};
xmlhttp.open("GET", "js/incidents.json", true);
xmlhttp.send();
console.log(accidentsData);

