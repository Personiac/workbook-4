"use strict";

let kids = ["Natalie", "Brittany", "Zachary"];
console.log(kids);

kids.sort(); // Sorts the array
console.log(kids);

let numKids = kids.length;

for (let i = 0; i < numKids; i++) {
  console.log(kids[i]);
}

console.log("--------------");
let numList = [1, 2, 32, 535, 152, 14];

console.log(`List 1: ${numList}`);
numList.sort(); //Character-based sorting on number list
console.log(`List 1, Empty sort(): ${numList}`);


function compareAscendingNumber(a, b) {
    if (a < b) return -1; // right order
    else if (a == b) return 0; // same values
  else return 1; // swap, wrong order
}

let numbers = [3, 27, 400, 1, 111, 5];
console.log(`List 2: ${numbers}`);

console.log("--------------");
const orderedNumbers = numbers.sort(compareAscendingNumber)
const newNumList = numList.sort(compareAscendingNumber);
console.log(`List 1, Helper Method + sort(): ${newNumList}`);
console.log(`List 2, Helper Method + sort(): ${orderedNumbers}`);

// List 2 Proper Sort Results: 1, 3, 5, 27, 111, 400

