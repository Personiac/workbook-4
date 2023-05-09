"use strict";

let kids = ["Jon", "Matt", "Will"];
console.log(kids);

for (let index = 0; index < kids.length; index++) {
    console.log(kids[index]);   
}

console.log("-----------");

for (let index = 0; index < kids.length + 2; index++) { //Added +2 length to condition
    console.log(kids[index]);   
}

console.log("-----------");

kids[3] = "Tom";
kids[4] = "kate"

for (let index = 0; index < kids.length; index++) { //Added two items and removed +2 from condition
    console.log(kids[index]);   
}
