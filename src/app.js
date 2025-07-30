import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
const div = document.querySelector("#card");
const button = document.querySelector("#generateBtn");

const myArray = ["♠", "♥", "♦", "♣"];
const myNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
console.log("myNumbers",myNumbers.length);

function getRandomCard(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generateRandomCard (){
  const randomNumber = getRandomCard(myNumbers);
  const randomSymbol = getRandomCard(myArray);

  if (randomSymbol === "♦") {
  console.log("It's a diamond!");
}
  
  const colorClass = (randomSymbol === "♥" || randomSymbol === "♦") ? "red" : "black";
  document.querySelector("#topSuit").className = `corner top-left ${colorClass}`;
  
  document.querySelector("#topSuit").textContent = randomSymbol;
  document.querySelector("#bottomSuit").textContent = randomSymbol;
  document.querySelector("#cardNumber").textContent = randomNumber;

  document.querySelector("#topSuit").className = `corner top-left ${colorClass}`;
  document.querySelector("#bottomSuit").className = `corner bottom-right ${colorClass}`;
  document.querySelector("#cardNumber").className = "center";

}
  document.querySelector("#generateBtn").addEventListener("click", generateRandomCard);

};

// const randomDec = Math.random()
// // //0.654567654
// const randomLongNum = randomDec * myArray.length
// // // long dec numbers from 0-5
// console.log("randomLongNum",randomLongNum)
// const randomNumNoDec = Math.floor(randomLongNum)
// console.log("randomNumNoDec",randomNumNoDec)

// // // removed decimals

// div.innerHTML = myArray[randomNumNoDec]

// };

