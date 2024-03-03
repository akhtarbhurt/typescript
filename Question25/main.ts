//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)



// Version 1: Passes the if test (alien_color is 'green')
let alien_color_pass: string = 'green';

if (alien_color_pass === 'green') {
    console.log("Player just earned 5 points!");
} else {
    console.log("No points earned this time.");
}

// Version 2: Fails the if test (alien_color is 'yellow')
let alien_color_fail: string = 'yellow';

if (alien_color_fail === 'green') {
    console.log("Player just earned 5 points!");
} else {
    console.log("No points earned this time.");
}
