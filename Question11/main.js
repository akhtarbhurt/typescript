//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// Store names in an array
var friendName = ["Akhtar", "Hameed", "Ali", "Mujeeb"];
// execute personalized messages
for (var _i = 0, friendName_1 = friendName; _i < friendName_1.length; _i++) {
    var name_1 = friendName_1[_i];
    console.log("Hello ".concat(name_1, ", I hope you're having a great day!"));
}
