// Part 1: Variables + Conditionals

let userName = "Wycliffe";  
const totalServices = document.querySelectorAll(".card").length;
var isDesigner = true;       

if (isDesigner) {
  console.log(userName + " is indeed a designer.");
} else {
  console.log(userName + " is not a designer.");
}

// Part 2: Custom Functions

// Function 1: Highlight all service cards
function highlightCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.border = "2px solid teal";
    card.style.padding = "10px";
  });
}

// Function 2: Add a new service card
function addService(title, description) {
  const newCard = document.createElement("article");
  newCard.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = description;

  newCard.appendChild(heading);
  newCard.appendChild(paragraph);

  document.getElementById("services").appendChild(newCard);
}
// Part 3: Loop Examples

// Example 1: For loop - log numbers
for (let i = 1; i <= 3; i++) {
  console.log("Loop count:", i);
}

// Example 2: While loop - countdown
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// Part 4: DOM Interactions

document.addEventListener("DOMContentLoaded", () => {
  // Changing and adding new cards
  document.querySelector("#about p").textContent =
    "I am learning DOM + JS with responsive layouts.";
  highlightCards();
  addService("Web Development", "I also create responsive websites with JS, HTML, and CSS.");
});
