interface Song {
	title: string;
	artist: string;
}
interface Video {
	title: string;
	creator: string;
	resolution: string;
}

class Playlist<T> {
	public queue: T[] = [];
	add(ele: T) {
		this.queue.push(ele);
	}
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();

videos.add({
	title: "Alien",
	creator: "director",
	resolution: "reso",
});
