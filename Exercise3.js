// Ask the user for their age
let age = prompt("Enter your age");

// Convert input to a number
age = Number(age);

// Check voting eligibility
if (age >= 18) {
  alert("You are eligible to vote.");
} else {
  alert("You are not eligible to vote yet.");
}
