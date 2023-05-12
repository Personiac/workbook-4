"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Sour Patch Kids", price: 4.29},
    {product: "Skittles", price: 2.99},
    {product: "Reese's Pieces", price: 3.49},
    {product: "Twizzlers", price: 3.29},
    {product: "Jelly Beans", price: 4.59},
    {product: "Kit Kat", price: 1.99},
];

products.sort(function(a,b) {
    let aUpper = a.product.toUpperCase();
    let bUpper = b.product.toUpperCase();

    if (aUpper < bUpper) return -1;
    else if (aUpper == bUpper) return 0;
    else return 1;
});

console.log(`Alphabetical Order of Products:`);
for (const items of products) {
    console.log(items.product);
}

console.log("----------");
console.log(`Descending Order of Price for Products:`);
products.sort(function(a,b) {
    let productA = a.price;
    let productB = b.price;

    if (productA > productB) return -1;
    else if (productA == productB) return 0;
    else return 1;
});

for (const items of products) {
    console.log(`${items.product}: $${items.price}`);
}