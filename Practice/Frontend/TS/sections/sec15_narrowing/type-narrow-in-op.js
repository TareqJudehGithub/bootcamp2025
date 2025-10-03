function getRuntime(item) {
    var runtime = 0;
    if ("duration" in item) {
        runtime = item.duration;
    }
    if ("episodeDuration" in item) {
        runtime = item.numEpisodes * item.episodeDuration;
    }
    return runtime;
}
var alien = {
    title: "Alien",
    duration: 106,
};
var GoT = {
    title: "Game of Thrones",
    numEpisodes: 8,
    episodeDuration: 60,
};
console.log(getRuntime(alien));
console.log(getRuntime(GoT));
