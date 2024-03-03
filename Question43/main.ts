// Unchanged Magicians Program
// Author: [Your Name]
// Date: [Current Date]

// Function to display magician names from an array
function displayMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function to make magicians great without modifying the original array
function makeMagiciansGreat(originalMagicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of originalMagicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

// Array of magician names
const magician_names: string[] = ["Atif Aslam", "Saggar ali bagga", "justin bieber", "rahat fatech ali khan"];

// Make magicians great without modifying the original array
const great_Magicians: string[] = makeMagiciansGreat([...magician_names]); // Creating a copy of the original array

// Display original magicians (original array remains unchanged)
console.log("Original Magicians:");
displayMagicians(magician_names);

// Display great magicians (new array with the Great added)
console.log("\nGreat Magicians:");
displayMagicians(great_Magicians);
