import usedCars from "./usedCars.js";

// 2 functions needed: one to iterate through the data and create the elements, one to iterate through the data and show/hide the elements

function createCards() {
  let cards = document.querySelector(".car-cards");
  for (let i = 0; i < usedCars.length; i++) {
    let newCard = document.createElement("div");
    let carH1 = document.createElement("h1");
    let newPrice = document.createElement("p");
    let newColor = document.createElement("p");
    let newMileage = document.createElement("p");
    let newMPG = document.createElement("p");
    let newBtn1 = document.createElement("p");
    let newBtn2 = document.createElement("button");

    let textH1 = document.createTextNode(
      usedCars[i].make +
        " " +
        usedCars[i].model +
        " " +
        usedCars[i].year.toString()
    );
    let textPrice = document.createTextNode("$" + usedCars[i].price.toString());
    let textColor = document.createTextNode("Color: " + usedCars[i].color);
    let textMileage = document.createTextNode(
      "Mileage: " + usedCars[i].mileage
    );
    let textMPG = document.createTextNode("MPG: " + usedCars[i].gasMileage);
    let textBuy = document.createTextNode("Buy Now");

    newCard.className = "card";
    newPrice.className = "price";

    carH1.appendChild(textH1);
    newPrice.appendChild(textPrice);
    newColor.appendChild(textColor);
    newMileage.appendChild(textMileage);
    newMPG.appendChild(textMPG);
    newBtn1.appendChild(newBtn2);
    newBtn2.appendChild(textBuy);

    newCard.appendChild(carH1);
    newCard.appendChild(newPrice);
    newCard.appendChild(newColor);
    newCard.appendChild(newMileage);
    newCard.appendChild(newMPG);
    newCard.appendChild(newBtn1);

    cards.appendChild(newCard);
  }
}

function redrawCards() {
  document.querySelectorAll(".card").forEach((e) => e.remove());
  document.querySelectorAll("#message").forEach((e) => e.remove());
  let cards = document.querySelector(".car-cards");
  let minYear = document.querySelector("#min-year");
  let maxYear = document.querySelector("#max-year");
  let make = document.querySelector("#car-make");
  let mileage = document.querySelector(".max-mileage");
  let price = document.querySelector(".max-price");
  let color = document.querySelector("#color");

  let validResult = false;

  for (let i = 0; i < usedCars.length; i++) {
    if (
      usedCars[i].year >= minYear.value &&
      usedCars[i].year <= maxYear.value &&
      (usedCars[i].make == make.value || make.value == "Any") &&
      usedCars[i].mileage <= mileage.value &&
      usedCars[i].price <= price.value &&
      (usedCars[i].color == color.value || color.value == "Any")
    ) {
      let newCard = document.createElement("div");
      let carH1 = document.createElement("h1");
      let newPrice = document.createElement("p");
      let newColor = document.createElement("p");
      let newMileage = document.createElement("p");
      let newMPG = document.createElement("p");
      let newBtn1 = document.createElement("p");
      let newBtn2 = document.createElement("button");

      let textH1 = document.createTextNode(
        usedCars[i].make +
          " " +
          usedCars[i].model +
          " " +
          usedCars[i].year.toString()
      );
      let textPrice = document.createTextNode(
        "$" + usedCars[i].price.toString()
      );
      let textColor = document.createTextNode("Color: " + usedCars[i].color);
      let textMileage = document.createTextNode(
        "Mileage: " + usedCars[i].mileage
      );
      let textMPG = document.createTextNode("MPG: " + usedCars[i].gasMileage);
      let textBuy = document.createTextNode("Buy Now");

      newCard.className = "card";
      newPrice.className = "price";

      carH1.appendChild(textH1);
      newPrice.appendChild(textPrice);
      newColor.appendChild(textColor);
      newMileage.appendChild(textMileage);
      newMPG.appendChild(textMPG);
      newBtn1.appendChild(newBtn2);
      newBtn2.appendChild(textBuy);

      newCard.appendChild(carH1);
      newCard.appendChild(newPrice);
      newCard.appendChild(newColor);
      newCard.appendChild(newMileage);
      newCard.appendChild(newMPG);
      newCard.appendChild(newBtn1);

      cards.appendChild(newCard);
      validResult = true;
    }
  }
  if (!validResult) {
    let messageDiv = document.createElement("div");
    let message = document.createElement("p");
    let messageText = document.createTextNode(
      "No results match your search. Try changing the filters."
    );
    messageDiv.style.display = "flex";
    messageDiv.style.justifyContent = "center";
    messageDiv.style.alignItems = "center";
    message.appendChild(messageText);
    messageDiv.appendChild(message);
    cards.appendChild(messageDiv);
    message.id = "message";
    console.log(messageDiv.style);
  }
}

// function filterCards() {
//   let minYear = document.querySelector("#min-year");
//   let maxYear = document.querySelector("#max-year");
//   let make = document.querySelector("#car-make");
//   let mileage = document.querySelector(".max-mileage");
//   let price = document.querySelector(".max-price");
//   let color = document.querySelector("#color");
//   let cards = document.querySelectorAll(".card");

//   console.log(minYear.value);
//   console.log(maxYear.value);
//   console.log(make.value);
//   console.log(mileage.value);
//   console.log(price.value);
//   console.log(color.value);

//   for (let i = 0; i < cards.length; i++) {
//     let currentCard = cards[i];
//     console.log(currentCard.make);
// if (
//   currentCard.year >= minYear.value &&
//   currentCard.year <= maxYear.value &&
//   (currentCard.make == make.value || make.value == "Any") &&
//   currentCard.mileage <= mileage.value &&
//   currentCard.price <= price.value &&
//   (currentCard.color == color.value || color.value == "Any")
// ) {
//   currentCard.style.display = "block";
//   console.log("passed filter");
// } else {
//   currentCard.style.display = "none";
//   console.log("failed filter");
//     }
//     console.log(currentCard.year);
//   }
// }

let filterButton = document.querySelector(".filter-button");

// let cards = document.querySelectorAll(".card");
// let testCard = cards[2];

filterButton.addEventListener("click", (e) => {
  redrawCards();
  console.log("clicked");
});

createCards();
