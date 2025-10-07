var permission = "admin";
function performAction(action, permission) {
    if (permission === "admin" && typeof action === "string") {
        console.log("Permission: Admin!");
    }
    else if (permission === "user" && typeof action === "string") {
        console.log("Permission: user!");
    }
}
performAction("Create", "admin");
