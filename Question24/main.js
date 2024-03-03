//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
//Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
var fruit = 'apple';
var number = 42;
var colors = ['red', 'blue', 'green'];
// Tests for equality and inequality with strings
console.log("Test 1: Is fruit equal to 'apple'? I predict True.");
console.log(fruit == 'apple'); // Prediction: True
console.log("Test 2: Is fruit not equal to 'banana'? I predict True.");
console.log(fruit != 'banana'); // Prediction: True
// Tests using the lower case function
console.log("Test 3: Is 'FRUIT' equal to 'fruit' after lowercasing? I predict True.");
console.log('FRUIT'.toLowerCase() == 'fruit'); // Prediction: True
// Numerical tests
console.log("Test 4: Is number equal to 42? I predict True.");
console.log(number == 42); // Prediction: True
console.log("Test 5: Is number not equal to 50? I predict True.");
console.log(number != 50); // Prediction: True
console.log("Test 6: Is number greater than 30? I predict True.");
console.log(number > 30); // Prediction: True
console.log("Test 7: Is number less than 20? I predict False.");
console.log(number < 20); // Prediction: False
console.log("Test 8: Is number greater than or equal to 42? I predict True.");
console.log(number >= 42); // Prediction: True
console.log("Test 9: Is number less than or equal to 40? I predict False.");
console.log(number <= 40); // Prediction: False
// Tests using "and" and "or" operators
console.log("Test 10: Is fruit equal to 'apple' and number equal to 42? I predict True.");
console.log(fruit == 'apple' && number == 42); // Prediction: True
console.log("Test 11: Is fruit equal to 'banana' or number equal to 50? I predict True.");
console.log(fruit == 'banana' || number == 50); // Prediction: True
// Test whether an item is in an array
console.log("Test 12: Is 'red' in the colors array? I predict True.");
console.log(colors.includes('red')); // Prediction: True
// Test whether an item is not in an array
console.log("Test 13: Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow')); // Prediction: True
