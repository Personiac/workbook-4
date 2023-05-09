"use strict";

let kids = ["Natalie", "Brittany", "Zachary"];

let oldest = kids[0];
let middle = kids[1];
let youngest = kids[2];

// for (let i = 0; i < 3; i++) {
//     console.log(kids[i]);
// }

let numKids = kids.length;

for (let i = 0; i < numKids; i++) {
    console.log(kids[i]);
}

console.log(`----------`);

let menu = [
    {item: "Hamburger", price: 6.95},
    {item: "Cheeseburger", price: 7.95},
    {item: "Hot Dog", price: 4.95}
]; 

for (let i = 0; i < menu.length; i++) {
    console.log(`${menu[i].item}, $${menu[i].price}`);
}

console.log(`----------`);


function getDrinks() {
    let drinks = ["Coffee", "Tea", "Water"];
    return drinks;
}

function displayDrinks(drinkMenu) {
    let numOfDrinks = drinkMenu.length;
    for (let i = 0; i < numOfDrinks; i++) {
        console.log(drinkMenu[i]);
    }
}

let ourDrinkMenu = getDrinks();
displayDrinks(ourDrinkMenu);