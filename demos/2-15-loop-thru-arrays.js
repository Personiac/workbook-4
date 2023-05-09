"use strict";

function getDrinkCost(orders) {
    let sum = 0;
    
    let numOfOrders = orders.length;
    for (let index = 0; index < numOfOrders; index++) {
        sum += orders[index].price;   
    }
    return sum;
}

let myOrder = [
    {item: "Pepsi", price: 2.95},
    {item: "Thai Tea", price: 5.75},
    {item: "Water", price: 1.25}
];

let yourOrder = [
    {item: "Coffee", price: 3.50},
    {item: "Green Tea", price: 2.70},
    {item: "Moutain Dew", price: 2.45}
];

let drinkCost = getDrinkCost(myOrder);
let totalWithTip = drinkCost * 1.2;
console.log(`My total comes out too $${totalWithTip.toFixed(2)}.`);

drinkCost = getDrinkCost(yourOrder);
totalWithTip = drinkCost * 1.2;
console.log(`Your total comes out too $${totalWithTip.toFixed(2)}.`);