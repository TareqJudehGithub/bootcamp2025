console.log("Hello World!");

function greetUser(user: string): string {
	return `Hello, ${user}!`;
}
const user: string = "John";
console.log(greetUser(user));
console.log("What are we going to code today? :)");

const todos: Todo[] = readTODOS();

const form = document.querySelector("form")!;
const todoList = document.querySelector("ul")!;
const userInput = document.getElementById("todo-input")! as HTMLInputElement;
const btn = document.getElementById("myBtn")!;

todos.forEach(createTodo);

// Calling Local Storage
function readTODOS(): Todo[] {
	const todosJSON = localStorage.getItem("todos");
	if (todosJSON === null) {
		return [];
	} else {
		return JSON.parse(todosJSON);
	}
}

function saveTodos() {
	// Save item to local storage
	// local storage only accepts strings, so we need to convert todos arrays to string first.
	localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", function (e: SubmitEvent) {
	e.preventDefault();

	// Creating a new Todo object
	const newTodo: Todo = {
		text: userInput.value,
		completed: false,
	};
	// Add the needed items to the newly created object.
	createTodo(newTodo);

	// Add the obj to the todo list
	todos.push(newTodo);
	console.log(todos);
});

function createTodo(todo: Todo) {
	// Create new element - <li />
	const newEli = document.createElement("li");
	const chkBox = document.createElement("input");
	chkBox.type = "checkbox";
	chkBox.checked = todo.completed; // true or false check

	chkBox.addEventListener("change", function () {
		todo.completed = chkBox.checked;
		saveTodos();
	});

	// Add the unchecked checkbox to every item add in the list
	newEli.append(chkBox);
	// Add value to the li element
	newEli.append(todo.text);

	// Add li to our list
	todoList.append(newEli);
	// Instead of using type assertions on todoList element, we can also use
	// optional chaining on todoList it self to handle null values.
	//todoList.append(newEli);

	saveTodos();
	// Clear input value
	userInput.value = "";
}

// Interfaces
interface Todo {
	text: string;
	completed: boolean;
}
