//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Create an array with three elements and intentionally throw an error
var fruits = ["Apple", "Banana", "Orange"];
// Intentionally access an element at an invalid index
var invalidIndex = 3;
console.log("Attempting to access element at index ".concat(invalidIndex, ": ").concat(fruits[invalidIndex]));
// Correctly access an element at a valid index
var validIndex = 1;
console.log("Accessing element at index ".concat(validIndex, ": ").concat(fruits[validIndex]));
