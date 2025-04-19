// Ask the user to enter a score
let score = prompt("Enter your score (0–100)");

// Convert input to a number
score = Number(score);

// Check the grade using if...else
if (score >= 70 && score <= 100) {
  alert("Excellent");
} else if (score >= 50 && score <= 69) {
  alert("Good");
} else if (score >= 0 && score < 50) {
  alert("Needs Improvement");
} else {
  alert("Invalid score. Please enter a number between 0 and 100.");
}
