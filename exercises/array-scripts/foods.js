"use strict";

let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

function subtotal(order) {
    let totalCost = 0;
    let numOfOrders = order.length;
    let firstTax = 0;
    let secondTax = 0;

    for (let index = 0; index < numOfOrders; index++) {
        totalCost += order[index].price;
    }
    firstTax = totalCost * 0.08;
    secondTax = totalCost * 0.18;
    console.log(`
    Total Cost: $${totalCost}.
    8% Tax: $${firstTax.toFixed(2)}
    18% Taxt: $${secondTax.toFixed(2)}`);
} 

subtotal(lunch);