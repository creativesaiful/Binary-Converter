
var input = document.querySelector("#number");
var result = document.querySelector("#result");
var button = document.querySelector("#submit");

function binary(e){
	e.preventDefault();

	if (input.value=="") {
		alert("input a number")
	}else if (input.value<0) {
		alert("input a positive number")
	}else{
		result.style.visibility = 'visible'
		result.innerHTML = parseInt(input.value).toString(2);
	}
}

button.addEventListener("click", binary)