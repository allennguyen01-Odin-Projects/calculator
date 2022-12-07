let output = document.querySelector(".output");
output.textContent = "";
let num1 = null;
let operator = null;
let num2 = null;
let solution = null;
let resetScreen = false;

function debug() {
	console.log("number1: ", num1);
	console.log("number2: ", num2);
	console.log("operator: ", operator);
	console.log("solution: ", solution);
	console.log("");
}

function getOperand(button) {
	if (resetScreen) {
		output.textContent = null;
		resetScreen = false;
	}
	
	output.textContent += button.textContent;
	debug();
}

function getOperator(button) {
	if (operator !== null) getSolution();

	num1 = parseInt(output.textContent);
	operator = button.classList[0];
	resetScreen = true;
	debug();
}

function getSolution() {
	num2 = parseInt(output.textContent);
	solution = operate(operator, num1, num2);
	output.textContent = solution;
	debug();
}

function clearOutput() {
	output.textContent = null;
	operator = null;
	num1 = null;
	num2 = null;
	solution = null;
	debug();
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) =>
	button.addEventListener("click", () => getOperand(button))
);

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) =>
	button.addEventListener("click", () => getOperator(button))
);

const equals = document.querySelector(".equals");
equals.addEventListener("click", getSolution);

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearOutput);

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(operator, num1, num2) {
	switch (operator) {
		case "add":
			return add(num1, num2);
		case "subtract":
			return subtract(num1, num2);
		case "multiply":
			return multiply(num1, num2);
		case "divide":
			return divide(num1, num2);
		default:
			return TypeError;
	}
}