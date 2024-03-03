//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
import { personName  } from "../Question1/main";
// const myName : string = "Akhtar Hameed";

// execute in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// execute in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// execute in title case
const titleCase = personName.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
console.log(`Titlecase: ${titleCase}`);



