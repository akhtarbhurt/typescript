//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Seeing the World Program
// Author: [Your Name]
// Date: [Current Date]

// Define an array of travel destinations
let travelDestinations: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Marrakech"];

// Print original order
console.log("Original Order:", travelDestinations);

// Print alphabetical order without modifying the list
console.log("Alphabetical Order:", [...travelDestinations.sort()]);

// Confirm the original order is unchanged
console.log("Original Order after Sorting:", travelDestinations);

// Print reverse alphabetical order without modifying the list
console.log("Reverse Alphabetical Order:", [...travelDestinations.sort().reverse()]);

// Confirm the original order is still unchanged
console.log("Original Order after Sorting and Reversing:", travelDestinations);

// Reverse the order of the list
travelDestinations.reverse();

// Print the reversed list
console.log("Reversed Order:", travelDestinations);

// Reverse the order of the list again
travelDestinations.reverse();

// Print the list to show it's back to its original order
console.log("Back to Original Order:", travelDestinations);

// Sort the array in alphabetical order
travelDestinations.sort();

// Print the array to show its order has changed
console.log("Sorted in Alphabetical Order:", travelDestinations);

// Sort the array in reverse alphabetical order
travelDestinations.sort((a, b) => b.localeCompare(a));

// Print the array to show its order has changed
console.log("Sorted in Reverse Alphabetical Order:", travelDestinations);
