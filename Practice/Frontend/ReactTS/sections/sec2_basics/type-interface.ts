interface Credentials {
	username: string;
	password: string;
}

let john_smith: Credentials = {
	username: "johnsmithy",
	password: "1q23dada",
};

interface AdminInter {
	permissions: string[];
}
interface AppUserInter {
	userName: string;
}
interface AppAdminInter extends AdminInter, AppUserInter {}

const admin2: AppAdminInter = {
	permissions: ["Create", "Edit", "Delete"],
	userName: "sarah-adams",
};

// Merging types
type Admin = {
	permissions: string[];
};

type AppUser = {
	userName: string;
};

const admin: Admin & AppUser = {
	permissions: ["Login"],
	userName: "john",
};
