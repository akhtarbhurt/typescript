

// Function to show magicians from an array
function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function to make magicians great by modifying the array
function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

// Array of magician's names
const magician_Names: string[] = ["Atif Aslam", "Saggar ali bagga", "justin bieber", "rahat fatech ali khan"];

// Make magicians great
const greatMagicians: string[] = make_great(magician_Names);

// Show magicians (original array)
console.log("Original Magicians:");
showMagicians(magician_Names);

// Show great magicians (modified array)
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
