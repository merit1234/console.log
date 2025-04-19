// Ask the user to enter a number
let number = prompt("Enter a number");

// Convert the input to a number
number = Number(number);

// Check if it's even or odd using the % operator
if (number % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}
