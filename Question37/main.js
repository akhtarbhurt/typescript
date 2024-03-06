//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Function to create a shirt with defaults
function make_shirt_size(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt Summary: Size ".concat(size, ", Message: \"").concat(message, "\""));
}
// Call the function with default size and message
make_shirt_size(); // Large shirt with default message
// Call the function with medium size and default message
make_shirt_size("Medium");
// Call the function with a specific size and a different message
make_shirt_size("Small", "TypeScript is awesome!");
