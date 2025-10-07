type Permission = "admin" | "user" | "editor";

let permission: Permission = "admin";

function performAction(action: string | number, permission: Permission) {
	if (permission === "admin" && typeof action === "string") {
		console.log("Permission: Admin!");
	} else if (permission === "user" && typeof action === "string") {
		console.log("Permission: user!");
	}
}

performAction("Create", "admin");
