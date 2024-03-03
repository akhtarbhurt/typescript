//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”



// Store examples of transportation in an array
const transportationModes: string[] = ["car", "motorcycle", "bicycle", "scooter", "train"];

// Print statements about each transportation mode
for (const mode of transportationModes) {
  console.log(`I would like to own a ${mode}.`);
}
