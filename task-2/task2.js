var memory = 0;
var result = "";
var operator = null;
function myClick(param){
	if (param>=0 && param <=9) {
		result=result+param;
	} else {
		if (result==="") {
			result = 0;
		} else {
			result = parseInt(result);
		}
		if (operator===null || operator==='enter') {
			memory = result;
		} else if (operator === "-") {
					memory = memory - result;
		} else if (operator === "*") {
					memory = memory * result;
		} else if (operator === "+") {
					memory = memory + result;
		} else if (operator === "/") {
					memory = memory / result;
		}
		result = "";
		operator = param;
	}
	if (result==="") {
		showResult(memory);
	} else {
		showResult(result);
	}
}
function showResult(param) {
	document.getElementById('output').innerHTML = param;
}

