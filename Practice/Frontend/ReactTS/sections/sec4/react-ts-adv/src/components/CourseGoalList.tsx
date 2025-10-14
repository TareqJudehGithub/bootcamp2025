import type { JSX, ReactNode } from "react";

import type { CourseGoal as CG } from "../models/courseGoal.model";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

export default function CourseGoalList(
	props: CourseGoalListProps
): JSX.Element {
	if (props.goals.length === 0) {
		return <InfoBox mode="hint">You no goal! Start setting some now!</InfoBox>;
	}
	let warningBox: ReactNode;
	if (props.goals.length >= 4) {
		warningBox = (
			<InfoBox mode="warning" severity="medium">
				"Too many goals! Try setting 3 goals maximum."
			</InfoBox>
		);
	}
	return (
		<>
			{warningBox}
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
		</>
	);
}
interface CourseGoalListProps {
	goals: CG[];
	onDeleteGoal: (id: number) => void;
}
