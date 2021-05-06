
function OnInputChange(element){
	var value = element.value;
	if(value.length == 0){
		element.classList.add("empty");
		element.classList.remove("not-empty");
	}
	else {
		element.classList.add("not-empty");
		element.classList.remove("empty");
	}
	
	var id = element.id;
	if(id == "fname"){
		if(value.length > 0){
			document.getElementById("lname").disabled = false;
		}
		else {
			document.getElementById("lname").disabled = true;
		}
	}
	else if(id == "lname"){
		if(value.length > 0){
			document.getElementById("email").disabled = false;
		}
		else {
			document.getElementById("email").disabled = true;
		}
	}
	else if(id == "email"){
		if(value.length > 0){
			document.getElementById("uname").disabled = false;
		}
		else {
			document.getElementById("uname").disabled = true;
		}
	}
	else if(id == "uname"){
		if(value.length > 0){
			document.getElementById("pass").disabled = false;
		}
		else {
			document.getElementById("pass").disabled = true;
		}
	}
}

function missingFields() {
  var txt = "";
  if (document.getElementById("fname").validity.valueMissing) {
    txt = document.getElementById("fname").name + ", ";
  } 
  if (document.getElementById("lname").validity.valueMissing) {
    txt = txt + document.getElementById("lname").name + ", ";
  } 
  if (document.getElementById("email").validity.valueMissing) {
    txt = txt + document.getElementById("email").name + ", ";
  } 
  if (document.getElementById("uname").validity.valueMissing) {
    txt = txt + document.getElementById("uname").name + ", ";
  } 
  if (document.getElementById("pass").validity.valueMissing) {
    txt = txt + document.getElementById("pass").name;
  } 
  if (txt != ""){
	  alert("this fields are missing: " + txt);
  }
}

function DisplayUsername(element){
	var str = element.value;
	str = str.substring(0,str.indexOf("@"));
	alert("The application of "+ str +" is saved!");
}