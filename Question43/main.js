// Unchanged Magicians Program
// Author: [Your Name]
// Date: [Current Date]
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to display magician names from an array
function displayMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great without modifying the original array
function makeMagiciansGreat(originalMagicians) {
    var greatMagicians = [];
    for (var _i = 0, originalMagicians_1 = originalMagicians; _i < originalMagicians_1.length; _i++) {
        var magician = originalMagicians_1[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Array of magician names
var magician_names = ["Atif Aslam", "Saggar ali bagga", "justin bieber", "rahat fatech ali khan"];
// Make magicians great without modifying the original array
var great_Magicians = makeMagiciansGreat(__spreadArray([], magician_names, true)); // Creating a copy of the original array
// Display original magicians (original array remains unchanged)
console.log("Original Magicians:");
displayMagicians(magician_names);
// Display great magicians (new array with the Great added)
console.log("\nGreat Magicians:");
displayMagicians(great_Magicians);
