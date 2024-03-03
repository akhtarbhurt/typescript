//Note: I have merged question 15 and 17. There is a mistake i noticed in your question that you ask to append() according to me append() cannot be used with array if i am wrong let me correct

// Question: 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


// Original list of people to invite to dinner
let anotherGuestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

// Print original personalized invitation messages
console.log("Original Invitations:");
for (const guest of anotherGuestList) {
  console.log(`Dear ${guest}, 
  You are invited to join me for a dinner. It would be an honor to have you. 
  Please let me know if you can make it. 
  Best regards, Akhtar Hameed`);
}

// Simulate a change: One person can't make it
const guestUnableToAttend: string = "Nelson Mandela";
console.log(`\nUnfortunately, ${guestUnableToAttend} can't make it to the dinner.\n`);

// Modify the list, replacing the guest who cannot attend with a new guest
const newGuest: string = "Osama bin ladin";
const newGuestList = anotherGuestList.map(guest => (guest === guestUnableToAttend ? newGuest : guest));

// Execute updated personalized invitation messages
console.log("Updated Invitations:");
for (const guest of anotherGuestList) {
  console.log(`Dear ${guest}, 
  Due to unforeseen circumstances, we regret to inform you that ${guestUnableToAttend} won't be able to make it.
  However, we would be delighted if you could join us for a dinner. 
  Please let me know if you can make it. 
  Best regards, Akhtar Hameed`);
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
const newGuestAtBeginning: string = "Bill Clinton";
newGuestList.unshift(newGuestAtBeginning);

// Add one new guest to the middle of the array
const newGuestInMiddle: string = "Barack Hossein Obama";
const middleIndex: number = Math.floor(anotherGuestList.length / 2);
anotherGuestList.splice(middleIndex, 0, newGuestInMiddle);

// Use push() to add one new guest to the end of the list
const newGuestAtEnd: string = "Marie Antoinette";
newGuestList.push(newGuestAtEnd);

// Execute new set of invitation messages for each person in the updated list
console.log("New Invitations:");
for (const guest of anotherGuestList) {
  console.log(`Dear ${guest}, 
  You are invited to join me for a dinner. We are excited to have you, and we have found a bigger table for everyone.
  Please let me know if you can make it. 
  Best regards, Akhtar Hameed`);
}

//this part is continuation of 15 and 16 and basically this is question 17 which itself stated ''Start with your program from Exercise 16''

//Question17:  Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program


// Remove guests until only two names remain
while (anotherGuestList.length > 2) {
  const removedGuest = anotherGuestList.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the two remaining guests
console.log(`\nDear ${anotherGuestList[0]} and ${anotherGuestList[1]}, 
  You are still invited to join me for a dinner. 
  We apologize for any inconvenience caused by the change in plans. 
  Please let us know if you can make it. 
  Best regards, [Your Name]\n`);

// Remove the last two names from the list, leaving it empty
anotherGuestList.pop();
anotherGuestList.pop();

// Print the list to confirm it's empty
console.log("Guest List after the dinner:\n", anotherGuestList);

export default anotherGuestList