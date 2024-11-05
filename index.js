"use strict";
let age = 16;
console.log(age);

const myName = "Maksim";
console.log(myName);

let isStudent = true;
console.log(isStudent);

let myString = "Nothing";
console.log(myString);

let number = 899;
let sum = number + 10;
console.log("Sum of adding is: " + sum);

let myNull = null;
console.log(myNull);

let promtName = prompt("Enter your name");
console.log(promtName);
alert("Hi, " + promtName);

let confirmData = confirm("Are you sure?");
if (confirmData == true) {
  alert("Action is done!!!");
} else if (confirmData == false) {
  alert("Action is cancle!!!");
}

alert("Warning, need to confirm your actions");
let isTrue = confirm("Are you confirm your actions?");
if (isTrue == true) {
} else if (isTrue == false) {
  alert("Action is cancel!!!!");
}
