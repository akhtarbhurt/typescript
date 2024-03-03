//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// List of people to invite to dinner
var guestList = ["Albert Einstein", "Quaid-e-Azam", "Nelson Mandela"];
// execute personalized invitation messages
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", \n  You are invited to join me for a dinner. It would be an honor to have you. \n  Please let me know if you can make it. \n  Best regards, Akhtar Hameed"));
}
