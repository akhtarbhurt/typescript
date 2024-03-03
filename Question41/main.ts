//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



// Function to show magicians from an array
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
const magicianNames: string[] = ["Atif Aslam", "Saggar ali bagga", "justin bieber", "rahat fatech ali khan"];

// Show magicians from the array
show_magicians(magicianNames);

