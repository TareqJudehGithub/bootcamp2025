// Custom components
import Main from "./components/Main/Main";
import Input from "./components/Input";
import Button from "./components/Main/Button";
import ButtonV2 from "./components/Main/ButtonV2";

function App() {
	return (
		<Main>
			<Input
				type="text"
				id="name"
				label="name"
				placeholder="Enter name.."
				autoFocus
			/>
			<Input type="number" id="age" label="age" placeholder="Enter age.." />
			<Button el="button" type="submit">
				Submit
			</Button>
			<Button el="anchor" href="https://www.google.com" target="_blank">
				Google
			</Button>
			<div>
				<ButtonV2 type="reset">Reset</ButtonV2>
				<ButtonV2 href="https://mail.google.com/mail" target="_blank">
					Gmail
				</ButtonV2>
			</div>
		</Main>
	);
}

export default App;
