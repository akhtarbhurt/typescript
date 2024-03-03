//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Dinner Guests Program
// Author: [Your Name]
// Date: [Current Date]
// Original list of people to invite to dinner
var totalGuestList = ["Albert Einstein", "Quaid-e-Aza,", "Nelson Mandela", "Benazir Bhutto", "Obama bin laden", "Bill clinton"];
totalGuestList.push("Zulfiqar Bhutto", "Shah Faisal", "Reza Shah Pehlavi");
// Print the number of people invited to dinner
var numberOfGuests = totalGuestList.length;
console.log("\nNumber of people invited to dinner: ".concat(numberOfGuests));
