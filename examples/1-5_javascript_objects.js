"use strict";

let message = `This is my message`;
let amount = 29.99;
let isApproved = false;

//<input type="text" id="first-name" />
//let htmlElement = document.getElementById("first-name");

//let name = "Ethan";
//let jobTitle = "Theatre Teacher";
//let payRate = 38.72;


let employee = {
    id: 1,
    name: "Ethan",
    jobTitle: "Theatre Teacher",
    payRate: 38.72,
};

console.log(employee);
console.log(employee.payRate); //Dot Notation
console.log(employee["payRate"]); //Bracket Notation    
console.log(); //Line break in console
console.log("---------------------");

function printEmployee(employee) {
    console.log(employee.id);
    console.log(employee.name);
    console.log(employee.jobTitle);
    console.log(employee.payRate);
};

printEmployee(employee);
