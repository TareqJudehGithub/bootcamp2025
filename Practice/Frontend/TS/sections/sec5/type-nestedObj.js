var alien = {
    title: "Alien",
    year: 1979,
    length: 90,
    moreDetails: {
        ageRate: 18,
        subtitles: "English",
        Genre: "Thriller horror",
    },
    IMDB: 7.5,
};
function movieDetails(movie) {
    return "Movie Details:\nTitle: ".concat(movie.title, "\nRelease Year: ").concat(movie.year, "\nGenre: ").concat(movie.moreDetails.Genre);
}
function alienMovie(movie) {
    return alien;
}
var movieString = movieDetails(alien);
var alienObj = alienMovie(alien);
console.log(movieString);
console.log(alienObj);
