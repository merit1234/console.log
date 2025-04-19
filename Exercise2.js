// Ask the user for the first number
let firstNumber = prompt("Enter first number");
firstNumber = Number(firstNumber);

// Ask for the operator
let operator = prompt("Enter operator (+, -, *, /)");

// Ask for the second number
let secondNumber = prompt("Enter second number");
secondNumber = Number(secondNumber);


let result;

if (operator === "+") {
  result = firstNumber + secondNumber;
} else if (operator === "-") {
  result = firstNumber - secondNumber;
} else if (operator === "*") {
  result = firstNumber * secondNumber;
} else if (operator === "/") {
  result = secondNumber !== 0 ? firstNumber / secondNumber : "Cannot divide by zero";
} else {
  result = "Invalid operator";
}

// Show the result
alert("Result: " + result);
