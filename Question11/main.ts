//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Store names in an array
const friendName =  ["Akhtar", "Hameed",  "Ali", "Mujeeb"];


// execute personalized messages
for (const name of friendName) {
  console.log(`Hello ${name}, I hope you're having a great day!`);
}
