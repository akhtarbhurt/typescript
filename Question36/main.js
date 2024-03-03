//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Function to create a shirt
function make_shirt(size, message) {
    console.log("Shirt Summary: Size ".concat(size, ", Message: \"").concat(message, "\""));
}
// Call the function with a specific size and message
make_shirt("L", "Hello, World!");
