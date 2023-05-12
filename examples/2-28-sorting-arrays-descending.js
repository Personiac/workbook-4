"use strict";

let numList = [1, 2, 32, 535, 152, 14];

console.log(`List 1: ${numList}`);
numList.sort(); //Character-based sorting on number list
console.log(`List 1, Empty sort(): ${numList}`);

let numbers = [3, 27, 400, 1, 111, 5];
console.log(`List 2: ${numbers}`);

console.log("--------------");

const orderedNumbers = numbers.sort( //nameless function
  function(a, b) {
    if (a > b) return -1; // right order
    else if (a == b) return 0; // same values
  else return 1; // swap, wrong order
}
)
const newNumList = numList.sort(function(a, b) { //nameless function
  if (a > b) return -1; // right order
  else if (a == b) return 0; // same values
else return 1; // swap, wrong order
});

console.log(`List 1, Helper Method + sort(): ${newNumList}`);
console.log(`List 2, Helper Method + sort(): ${orderedNumbers}`);

// List 2 Proper Sort Results: 400, 111, 27, 5, 3, 1

