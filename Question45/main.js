// Car Information Program
// Author: [Your Name]
// Date: [Current Date]
// Function to store information about a car
function carInformation(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add additional options to the car information
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var _b = Object.entries(option)[0], key = _b[0], value = _b[1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Calling the function with required and additional information
var myCar = carInformation("Toyota", "Camry", { color: "Blue", features: ["Navigation", "Sunroof"] });
// Printing the returned Object
console.log("Car Information:");
console.log(myCar);
