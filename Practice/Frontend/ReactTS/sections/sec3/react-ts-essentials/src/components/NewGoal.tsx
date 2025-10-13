import { useRef, type FormEvent, type JSX } from "react";

export default function NewGoal(props: NewGoalProps): JSX.Element {
	// Hooks
	const goal = useRef<HTMLInputElement>(null);
	const summary = useRef<HTMLInputElement>(null);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const enteredGoal = goal.current!.value;
		const enteredSummary = summary.current!.value;

		props.onAddGoal(enteredGoal, enteredSummary);
		// Reset input values to default
		e.currentTarget.reset();
	}
	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor="goal">Your Goal</label>
				<input type="text" id="goal" autoFocus ref={goal} />
			</p>
			<p>
				<label htmlFor="summary">Short Summary</label>
				<input type="text" id="summary" ref={summary} />
			</p>
			<button>Add Goal</button>
		</form>
	);
}

interface NewGoalProps {
	onAddGoal: (goal: string, summary: string) => void;
}
