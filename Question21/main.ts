//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



// Define a TypeScript interface for a movie
interface Movie {
    title: string;
    director: string;
    year: number;
  }
  
  // Create objects using the Movie interface
  const movie1: Movie = {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994
  };
  
  const movie2: Movie = {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972
  };
  
  const movie3: Movie = {
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
  function printMovieInfo(movie: Movie): void {
    console.log(`Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}`);
  }
  