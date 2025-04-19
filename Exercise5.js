// Ask the user to enter a number
let number = prompt("Enter a number for the multiplication table");

// Convert input to a number
number = Number(number);

// Use a for loop to print the multiplication table from 1 to 12
for (let i = 1; i <= 12; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
