import Greeter, { WelcomeUser } from "./components/Greeter";

function App() {
	return (
		<>
			<Greeter person="John Smith" />
			<WelcomeUser name="Sarah" />
		</>
	);
}

export default App;
