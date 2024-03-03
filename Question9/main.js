"use strict";
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
Object.defineProperty(exports, "__esModule", { value: true });
//// Famous Quote Program
// Author: Akhtar Hameed
// Date: 3/3/2024
// Storing a famous person's name and a quote, then printing the formatted message.
var main_1 = require("../Question4/main");
// Composing the message
var result = "".concat(main_1.famous_person, " once said, \"").concat(main_1.quote, "\"");
// Printing the message
console.log("Question 9 :", result);
// Question2/main.ts
// Author: Akhtar Hameed
// Date: 3/3/2024
// Name Cases Program
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var main_2 = require("../Question1/main");
// execute in lowercase
console.log("Lowercase: ".concat(main_2.personName.toLowerCase()));
// execute in uppercase
console.log("Uppercase: ".concat(main_2.personName.toUpperCase()));
// execute in title case
var titleCase = main_2.personName.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); });
console.log("Titlecase: ".concat(titleCase));
