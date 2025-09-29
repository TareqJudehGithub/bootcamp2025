type Movie = {
	title: string;
	year: number;
	length: number;
	moreDetails: {
		ageRate: number;
		subtitles: string;
		Genre: string;
	};
	IMDB: number;
};

const alien: Movie = {
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

function movieDetails(movie: Movie): string {
	return `Movie Details:\nTitle: ${movie.title}\nRelease Year: ${movie.year}\nGenre: ${movie.moreDetails.Genre}`;
}

function alienMovie(movie: Movie): Movie {
	return alien;
}

const movieString = movieDetails(alien);
const alienObj = alienMovie(alien);

console.log(movieString);
console.log(alienObj);
