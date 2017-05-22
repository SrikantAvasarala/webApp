var accumulator = null;
var operand = 0;
var prevSymbol = null;

function getOperand(digit) {
	var digitValue = parseInt(document.getElementById(digit).innerHTML);
	operand = operand*10 + digitValue;
	document.getElementById("display").innerHTML = operand;
}

function getSymbol(symbol) {
	document.getElementById("display").innerHTML = 0;
	if (accumulator == null) {
		accumulator = operand;
		operand = 0;
		prevSymbol = symbol;
		return;
	}

	switch(symbol) {
		case "+":
			accumulator = accumulator + operand;
			operand = 0;
			break;
		case "-":
			accumulator = accumulator - operand;
			operand = 0;
			break;
		case "x":
			accumulator = accumulator * operand;
			operand = 0;
			break;
		case "=":
			if (prevSymbol == '=')	return;
			getSymbol(prevSymbol);
			document.getElementById("display").innerHTML = accumulator;
			break;
		case "C":
			accumulator = null;
			operand = 0;
			prevSymbol = null;
			return;
	}
	prevSymbol = symbol;
}