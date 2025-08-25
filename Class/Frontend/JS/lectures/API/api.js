const posts = [];
async function LoadPosts() {
	const container = document.querySelector("#postContainer");
	container.innerHTML = "Loading...";

	try {
		const res = await fetch(
			"https://jsonplaceholder.typicode.com/posts?_limit=10"
		);
		const data = await res.json();

		posts = data;
		container.innerHTML = "";

		console.log(data);
	} catch (err) {
		console.log(err);
		container.innerHTML = "Error fetching data";
		console.error(err);
	}
}
LoadPosts();

function renderPosts() {
	const container = document.querySelector("#postContainer");
	container.innerHTML = "";

	posts.forEach((post) => {
		const div = document.createElement("div");
		div.className = "post";
		div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</>
    <button class="delete" onclick="deletePost(${post.Id})">Delete</button>
    <button class="edit" onclick="editPost(${post.Id})">Delete</button>
    `;
		container.appendChild(div);
	});
}
