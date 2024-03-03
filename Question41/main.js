//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Function to show magicians from an array
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicianNames = ["Atif Aslam", "Saggar ali bagga", "justin bieber", "rahat fatech ali khan"];
// Show magicians from the array
show_magicians(magicianNames);
