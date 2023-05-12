"use strict";

let teams = ["Red Sox", "Rangers", "Blue Jays", "Astros", "White Sox", "Rangers"];
let index = teams.indexOf("Rangers");
 // returns 1
if (index == -1)
 console.log("Item not found");
else
console.log(`Found ${teams[index]} at position ${index} in Teams Array`);


let teams2 = ["Red Sox", "Rangers", "Blue Jays", "Astros", "White Sox", "Rangers"];
let index2 = teams2.indexOf("Rangers", 3);
if (index2 == -1)
 console.log("Item not found");
else
 console.log(`Found ${teams[index2]} at position ${index2} in Teams 2 Array`);