function compareAscendingNumber(a, b) {
  // if a is smaller, a-b is negative so don't swap!
  return a - b;
}
let numbers = [3, 27, 400, 1, 111, 5];
console.log(numbers);
numbers.sort(compareAscendingNumber);
console.log(numbers);
// Results: 1, 3, 5, 27, 111, 400

console.log("-------------");

function compareDescendingNumber(a, b) {
    return b - a;
  }
  let numbers2 = [3, 27, 400, 1, 111, 5];
  console.log(numbers2);
  numbers2.sort(compareDescendingNumber);
  console.log(numbers2);
  // Results: 400, 111, 27, 5, 3, 1
  