import type { ReactNode, JSX } from "react";
export default function CourseGoal(props: CourseGoalProps): JSX.Element {
	return (
		<article>
			<div>
				<h2>{props.title}</h2>
				{props.children}
			</div>
			<button>Delete</button>
		</article>
	);
}

interface CourseGoalProps {
	title: string;
	children: ReactNode;
}
