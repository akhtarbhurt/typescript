// Function to show magicians from an array
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great by modifying the array
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Array of magician's names
var magician_Names = ["Atif Aslam", "Saggar ali bagga", "justin bieber", "rahat fatech ali khan"];
// Make magicians great
var greatMagicians = make_great(magician_Names);
// Show magicians (original array)
console.log("Original Magicians:");
showMagicians(magician_Names);
// Show great magicians (modified array)
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
