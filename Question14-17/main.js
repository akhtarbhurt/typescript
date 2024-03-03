//Note: I have merged question 15 and 17. There is a mistake i noticed in your question that you ask to append() according to me append() cannot be used with array if i am wrong let me correct
// Question: 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Original list of people to invite to dinner
var anotherGuestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
// Print original personalized invitation messages
console.log("Original Invitations:");
for (var _i = 0, anotherGuestList_1 = anotherGuestList; _i < anotherGuestList_1.length; _i++) {
    var guest = anotherGuestList_1[_i];
    console.log("Dear ".concat(guest, ", \n  You are invited to join me for a dinner. It would be an honor to have you. \n  Please let me know if you can make it. \n  Best regards, Akhtar Hameed"));
}
// Simulate a change: One person can't make it
var guestUnableToAttend = "Nelson Mandela";
console.log("\nUnfortunately, ".concat(guestUnableToAttend, " can't make it to the dinner.\n"));
// Modify the list, replacing the guest who cannot attend with a new guest
var newGuest = "Osama bin ladin";
var newGuestList = anotherGuestList.map(function (guest) { return (guest === guestUnableToAttend ? newGuest : guest); });
// Execute updated personalized invitation messages
console.log("Updated Invitations:");
for (var _a = 0, anotherGuestList_2 = anotherGuestList; _a < anotherGuestList_2.length; _a++) {
    var guest = anotherGuestList_2[_a];
    console.log("Dear ".concat(guest, ", \n  Due to unforeseen circumstances, we regret to inform you that ").concat(guestUnableToAttend, " won't be able to make it.\n  However, we would be delighted if you could join us for a dinner. \n  Please let me know if you can make it. \n  Best regards, Akhtar Hameed"));
}
// More Guests Program
console.log("\nMore Guests:");
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.\n");
// Question: 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Add one new guest to the beginning of the array
var newGuestAtBeginning = "Bill Clinton";
newGuestList.unshift(newGuestAtBeginning);
// Add one new guest to the middle of the array
var newGuestInMiddle = "Barack Hossein Obama";
var middleIndex = Math.floor(anotherGuestList.length / 2);
anotherGuestList.splice(middleIndex, 0, newGuestInMiddle);
// Use push() to add one new guest to the end of the list
var newGuestAtEnd = "Marie Antoinette";
newGuestList.push(newGuestAtEnd);
// Execute new set of invitation messages for each person in the updated list
console.log("New Invitations:");
for (var _b = 0, anotherGuestList_3 = anotherGuestList; _b < anotherGuestList_3.length; _b++) {
    var guest = anotherGuestList_3[_b];
    console.log("Dear ".concat(guest, ", \n  You are invited to join me for a dinner. We are excited to have you, and we have found a bigger table for everyone.\n  Please let me know if you can make it. \n  Best regards, Akhtar Hameed"));
}
//this part is continuation of 15 and 16 and basically this is question 17 which itself stated ''Start with your program from Exercise 16''
//Question17:  Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
// Remove guests until only two names remain
while (anotherGuestList.length > 2) {
    var removedGuest = anotherGuestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to the two remaining guests
console.log("\nDear ".concat(anotherGuestList[0], " and ").concat(anotherGuestList[1], ", \n  You are still invited to join me for a dinner. \n  We apologize for any inconvenience caused by the change in plans. \n  Please let us know if you can make it. \n  Best regards, [Your Name]\n"));
// Remove the last two names from the list, leaving it empty
anotherGuestList.pop();
anotherGuestList.pop();
// Print the list to confirm it's empty
console.log("Guest List after the dinner:\n", anotherGuestList);
