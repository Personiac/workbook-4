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

function cheapCandy(products) {
    for (let index = 0; index < products.length; index++) {
        let candy = products[index];
        if (candy.price < 4) {
            console.log(`${candy.product} costs $${candy.price}, which is less than $4.`);
        }
    }
}

function findMMs(products) {
    for (let index = 0; index < products.length; index++) {
        let candy = products[index];
        if (candy.product.includes("M&Ms")) {
            console.log(`${candy.product} has M&Ms.`);
        }
    }
}

function swedishFish(producs) {
    for (let index = 0; index < products.length; index++) {
        const candy = products[index];
        if (candy.product == "Swedish Fish") {
            console.log(`We do have ${candy.product}!`);
            return true;
        }
    }
    return false;
}

cheapCandy(products);
findMMs(products);
swedishFish(products);
