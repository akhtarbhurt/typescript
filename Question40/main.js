// Function to create an album Object
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    // Add tracks to the album Object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums using the function
var album1 = make_album("Atif Aslam", "Dooriyan");
var album2 = make_album("Daniel Coulter Reynolds", "Imagine Dragon", 12);
var album3 = make_album("Nusrat Fateh Ali Khan", "Mashriq Qawwali", 8);
// Print each album Object
console.log(album1);
console.log(album2);
console.log(album3);
