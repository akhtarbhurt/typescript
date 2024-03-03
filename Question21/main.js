//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Create objects using the Movie interface
var movie1 = {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994
};
var movie2 = {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972
};
var movie3 = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010
};
// Print information about favorite movies
console.log("My Favorite Movies:");
printMovieInfo(movie1);
printMovieInfo(movie2);
printMovieInfo(movie3);
// Function to print movie information
function printMovieInfo(movie) {
    console.log("Title: ".concat(movie.title, ", Director: ").concat(movie.director, ", Year: ").concat(movie.year));
}
