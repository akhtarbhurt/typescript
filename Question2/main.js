//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var myName = "Akhtar Hameed";


console.log("Lowercase: ".concat(myName.toLowerCase()));
console.log("Uppercase: ".concat(myName.toUpperCase()));
var titleCase = myName.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); });
console.log("Titlecase: ".concat(titleCase));
