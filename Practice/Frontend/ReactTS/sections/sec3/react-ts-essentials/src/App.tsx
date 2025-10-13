// React
import { useState } from "react";
// Models
import type { CourseGoal } from "./models/courseGoal.model";
// Media
import goalsImg from "./assets/goals.jpg";
// Components
import Header from "./components/Header/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	// Handle functions
	function handleAddGoal(goal: string, summary: string) {
		/* This handle function adds new goals to the TODO goals list*/

		setGoals((prevGoals) => {
			const newGoal: CourseGoal = {
				id: Math.trunc(Math.random() * 1000) + 1,
				title: goal,
				description: summary,
			};
			return [...prevGoals, newGoal];
		});
	}
	function handleDeleteGoal(id: number) {
		setGoals((prevGoals) => prevGoals.filter((item) => item.id !== id));
	}

	return (
		<main>
			<Header
				image={{
					src: goalsImg,
					alt: "A list of goals",
				}}
			>
				<h1>Your Course Goals</h1>
			</Header>
			<NewGoal onAddGoal={handleAddGoal} />
			<CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
		</main>
	);
}
