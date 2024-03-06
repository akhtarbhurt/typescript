// Function to store information about a car
function carInformation(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { [key: string]: any } {
    const carInfo: { [key: string]: any } = {
        manufacturer,
        model,
    };

    // Add additional options to the car information
    for (const option of options) {
        const [key, value] = Object.entries(option)[0];
        carInfo[key] = value;
    }

    return carInfo;
}

// Calling the function with required and additional information
const myCar = carInformation("Toyota", "Camry", { color: "Blue", features: ["Navigation", "Sunroof"] });

// Printing the returned Object
console.log("Car Information:");
console.log(myCar);
