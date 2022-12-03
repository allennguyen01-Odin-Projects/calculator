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

let output = document.querySelector(".output");
output.textContent = "";
let num1 = 0;

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) =>
	button.addEventListener("click", () => {
		output.textContent += button.textContent;
		console.log(typeof button.textContent);
		num1 = parseInt(output.textContent);
		console.log(num1, typeof num1);
	})
);

function clearOutput() {
	const clear = document.querySelector(".clear");
	clear.addEventListener("click", () => {
		output.textContent = "";
	});
}

clearOutput();
