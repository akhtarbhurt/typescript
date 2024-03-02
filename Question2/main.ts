//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const myName : string = "Akhtar Hameed";

// Print in lowercase
console.log(`Lowercase: ${myName.toLowerCase()}`);

// Print in uppercase
console.log(`Uppercase: ${myName.toUpperCase()}`);

// Print in title case
const titleCase = myName.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
console.log(`Titlecase: ${titleCase}`);



