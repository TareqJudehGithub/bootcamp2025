import type { JSX } from "react";
import type { CourseGoal as CG } from "../models/courseGoal.model";
import CourseGoal from "./CourseGoal";

export default function CourseGoalList(
	props: CourseGoalListProps
): JSX.Element {
	return (
		<ul>
			{props.goals.map((goal) => (
				<li key={goal.id}>
					<CourseGoal
						title={goal.title}
						id={goal.id}
						onDelete={props.onDeleteGoal}
					>
						<p>{goal.description}</p>
					</CourseGoal>
				</li>
			))}
		</ul>
	);
}
interface CourseGoalListProps {
	goals: CG[];
	onDeleteGoal: (id: number) => void;
}
