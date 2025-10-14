import type { ReactNode, JSX } from "react";
export default function CourseGoal(props: CourseGoalProps): JSX.Element {
	return (
		<article>
			<div>
				<h2>{props.title}</h2>
				{props.children}
			</div>
			<button onClick={() => props.onDelete(props.id)}>Delete</button>
		</article>
	);
}

interface CourseGoalProps {
	id: number;
	title: string;
	children: ReactNode;
	onDelete: (id: number) => void;
}
