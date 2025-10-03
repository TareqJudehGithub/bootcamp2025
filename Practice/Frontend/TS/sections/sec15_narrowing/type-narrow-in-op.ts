interface Movie {
	title: string;
	duration: number;
}

interface TVShow {
	title: string;
	numEpisodes: number;
	episodeDuration: number;
}

function getRuntime(item: Movie | TVShow): number {
	let runtime: number = 0;

	if ("duration" in item) {
		runtime = item.duration;
	}
	if ("episodeDuration" in item) {
		runtime = item.numEpisodes * item.episodeDuration;
	}
	return runtime;
}

const alien: Movie = {
	title: "Alien",
	duration: 106,
};

const GoT: TVShow = {
	title: "Game of Thrones",
	numEpisodes: 8,
	episodeDuration: 60,
};

console.log(getRuntime(alien));
console.log(getRuntime(GoT));
