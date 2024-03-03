//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//// Famous Quote Program
// Author: Akhtar Hameed
// Date: 3/3/2024

// Storing a famous person's name and a quote, then printing the formatted message.
import { famous_person, quote } from "../Question4/main";

// Composing the message
const result: string = `${famous_person} once said, "${quote}"`;

// Printing the message
console.log( "Question 9 :", result);

// Question2/main.ts
// Author: [Your Name]
// Date: [Current Date]

// Name Cases Program
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
import { personName } from "../Question1/main";

// Print in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// Print in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Print in title case
const titleCase = personName.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
console.log(`Titlecase: ${titleCase}`);
