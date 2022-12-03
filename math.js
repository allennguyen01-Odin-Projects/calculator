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

let output = document.querySelector(".output");
output.textContent = "";
let num1 = null;
let operator = null;
let num2 = null;
let solution = null;

function displayOutput() {
	const numberButtons = document.querySelectorAll(".number");
	numberButtons.forEach((button) =>
		button.addEventListener("click", () => {
			output.textContent += button.textContent;
			if (operator === null) {
				num1 = parseInt(output.textContent);
			} else {
				num2 = parseInt(output.textContent);
			}
			console.log("number1", num1, typeof num1);
			console.log("number2", num2, typeof num2);
			console.log("operator", operator, typeof operator);
		})
	);
}

function getOperator() {
	const operatorButtons = document.querySelectorAll(".operator");
	operatorButtons.forEach((button) =>
		button.addEventListener("click", () => {
			num1 = parseInt(output.textContent);
			operator = button.classList[0];
			output.textContent = null;
			console.log(operator, typeof operator);
		})
	);
}

function getSolution() {
	const equals = document.querySelector(".equals");
	equals.addEventListener("click", () => {
		solution = operate(operator, num1, num2);
		output.textContent = solution;
	});
}

function clearOutput() {
	const clear = document.querySelector(".clear");
	clear.addEventListener("click", () => {
		output.textContent = null;
		operator = null;
		num1 = null;
		num2 = null;
	});
}

displayOutput();
clearOutput();
getOperator();
getSolution();

// module.exports = { add, subtract, multiply, divide, operate };
