function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiple(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(operator, num1, num2) {
	switch (operator) {
		case "+":
			add(num1, num2);
		case "-":
			subtract(num1, num2);
		case "*":
			multiply(num1, num2);
		case "/":
			divide(num1, num2);
		default:
			return TypeError;
	}
}
