//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
// Test 1: Check if car is equal to 'subaru'
console.log("Test 1: Is car equal to 'subaru'? I predict True.");
console.log(car == 'subaru'); // Prediction: True
// Test 2: Check if car is equal to 'honda'
console.log("Test 2: Is car equal to 'honda'? I predict False.");
console.log(car == 'honda'); // Prediction: False
// Test 3: Check if car is not equal to 'toyota'
console.log("Test 3: Is car not equal to 'toyota'? I predict True.");
console.log(car != 'toyota'); // Prediction: True
// Test 4: Check if car is equal to 'Subaru' (case-sensitive)
console.log("Test 4: Is car equal to 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // Prediction: False
// Test 5: Check if car is not equal to 'subaru' (case-sensitive)
console.log("Test 5: Is car not equal to 'subaru'? I predict True.");
console.log(car !== 'subaru'); // Prediction: True
// Test 6: Check if car starts with 'sub'
console.log("Test 6: Does car start with 'sub'? I predict True.");
console.log(car.startsWith('sub')); // Prediction: True
// Test 7: Check if car ends with 'aru'
console.log("Test 7: Does car end with 'aru'? I predict True.");
console.log(car.endsWith('aru')); // Prediction: True
// Test 8: Check if car includes 'baru'
console.log("Test 8: Does car include 'baru'? I predict True.");
console.log(car.includes('baru')); // Prediction: True
// Test 9: Check if car includes 'bar'
console.log("Test 9: Does car include 'bar'? I predict False.");
console.log(car.includes('bar')); // Prediction: False
// Test 10: Check if car is greater than 'honda' (based on lexicographical order)
console.log("Test 10: Is car greater than 'honda'? I predict True.");
console.log(car > 'honda'); // Prediction: True
