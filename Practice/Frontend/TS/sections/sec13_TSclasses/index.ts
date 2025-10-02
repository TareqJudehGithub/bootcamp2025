class Player {
	// Properties
	private _id: string;
	public readonly first: string;
	public readonly last: string;
	public score: number = 0;
	protected _salary!: number;

	// getters
	get fullName(): string {
		return `${this.first} ${this.last}`;
	}
	get salary(): number {
		return this._salary;
	}

	// setters
	set salary(newSalary: number) {
		if (newSalary < 0) {
			throw new Error("Salary cannot be negative");
		}
		this._salary = newSalary;
	}

	// constructor
	constructor(id: string, first: string, last: string, score: number) {
		this._id = id;
		this.first = first;
		this.last = last;
		this.score = score;
	}

	// methods
	public playerDetails(): string {
		return `Name: ${this.first} ${this.last}\nScore: ${this.score}`;
	}
}

const elton = new Player("001", "Elton", "Steel", 0);
console.log(elton.first, elton.last, elton.score);
console.log(elton.playerDetails());

// Parameter properties shortcut
class Manager {
	constructor(public first: string, public last: string) {}
}

class adminPlayer extends Player {
	public isAdmin: boolean = true;
	maxScore() {
		this._salary = 999999; // Can access _salary because it has 'protected' modifier.
	}
}
