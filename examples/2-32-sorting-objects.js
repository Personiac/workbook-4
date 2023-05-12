"use strict";

let products = [
    {prodId: 2, item: "Notepads (12 pk)", price: 12.29},
    {prodId: 12, item: "Black Pens (12 pk)", price: 5.70},
    {prodId: 22, item: "Stapler", price: 12.79}
   ];

   products.sort(function(a, b){ //Ascending Order because a is less than b
    if (a.item < b.item) return -1;
    else if (a.item == b.item) return 0;
    else return 1;
   });

   let numProducts = products.length;
   for(let i = 0; i < numProducts; i++) {
    console.log(products[i].item + 
    " $" + products[i].price.toFixed(2));
   }

   console.log("---------------");
   let i = 1;
   for (const itemProfile of products) {
    console.log(`Item ${i}: ${itemProfile.item} - $${itemProfile.price.toFixed(2)}`);
    i++;
   }
   