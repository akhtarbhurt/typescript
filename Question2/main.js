"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var main_1 = require("../Question1/main");
// const myName : string = "Akhtar Hameed";
// execute in lowercase
console.log("Lowercase: ".concat(main_1.personName.toLowerCase()));
// execute in uppercase
console.log("Uppercase: ".concat(main_1.personName.toUpperCase()));
// execute in title case
var titleCase = main_1.personName.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); });
console.log("Titlecase: ".concat(titleCase));
