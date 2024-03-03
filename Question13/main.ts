//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.



// List of people to invite to dinner
const guestList: string[] = ["Albert Einstein", "Quaid-e-Azam", "Nelson Mandela"];

// execute personalized invitation messages
for (const guest of guestList) {
  console.log(`Dear ${guest}, 
  You are invited to join me for a dinner. It would be an honor to have you. 
  Please let me know if you can make it. 
  Best regards, Akhtar Hameed`);
}
