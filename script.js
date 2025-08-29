// =======================================
// 🎯 Part 1: JavaScript Basics
// =======================================

// Variables and Conditionals
let age = 20;
if (age >= 18) {
  console.log("You are an adult ✅");
} else {
  console.log("You are a minor ❌");
}

// Example of capturing input (simplified)
let userName = "Alice"; // In real case: prompt("Enter your name");
console.log("Hello, " + userName + "!");


// =======================================
// ❤️ Part 2: Functions (Reusability)
// =======================================

// Function to calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total: " + calculateTotal(200, 3));

// Function to format a string
function greet(name) {
  return `Hello, ${name}! Welcome to JS 🚀`;
}
console.log(greet("James"));


// =======================================
// 🔁 Part 3: Loops (Repetition)
// =======================================

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Count:", i);
}

// While loop
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}


// =======================================
// 🌐 Part 4: DOM Manipulation
// =======================================

// 1. Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("output").innerText = "Text changed using DOM!";
});

// 2. Toggle a CSS class
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("title").classList.toggle("highlight");
});

// 3. Add a new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item Added!";
  document.getElementById("list").appendChild(newItem);
});

