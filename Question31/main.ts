// No Users Program
// Author: [Your Name]
// Date: [Current Date]

// Make an array of usernames
const userNames: string[] = [];

// Check if the list of users is not empty
if (userNames.length > 0) {
    // Loop through the array and print a greeting for each user
    for (const username of userNames) {
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}
