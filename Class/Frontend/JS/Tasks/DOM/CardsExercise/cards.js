console.log("Cards Task");

// variables
const inputTxt = document.getElementById("text");
const addBtn = document.getElementById("add");
const editBtn = document.getElementById("edit");
const removeBtn = document.getElementById("remove");
const usersList = document.getElementById("users-List");
let users = [];

// Functions
const addUser = () => {
	// Add a new user

	const user = inputTxt.value.trim();
	// In case of no input
	if (!user) {
		console.log("No text was provided!");
		return;
	}
	users.push(user);
	console.log(users);

	// Create/build new card elements

	const userCard = document.createElement("h5");
	userCard.innerHTML = "New Name";
	console.log(userCard.innerHTML);
	userCard.textContent = user;
	console.log(userCard.textContent);
	userCard.classList.add("card-title");

	usersList.append(userCard);

	const editButton = document.createElement("a");
	editButton.classList.add("btn");
	editButton.classList.add("btn-primary");

	editButton.innerHTML = "Edit Me";

	usersList.append(editButton);

	// Clear input text field

	inputTxt.innerHTML = "";

	removeBtn?.addEventListener("click", () => {
		userCard.remove();
	});
};

// events
// @ts-ignore
addBtn.addEventListener("click", addUser);
