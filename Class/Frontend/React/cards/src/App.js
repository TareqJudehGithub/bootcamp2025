import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header>
				<nav
					style={{
						display: "flex",
						listStyle: "none",
						gap: "20px",
						padding: "5px",
					}}
				>
					<li>Home</li>
					<li>Contact Us</li>
					<li>Our Services</li>
				</nav>
			</header>
			<main>
				<h1>Cards Application</h1>
				<div style={{}}></div>
				<div>
					<h3
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							height: "300px",
							width: "250px",
							backgroundColor: "#f2f2f2f2",
							borderRadius: "30px",
						}}
					>
						Student Name:{" "}
					</h3>
					<p>Tareq</p>
				</div>
			</main>
			<footer
				style={{
					display: "flex",
					listStyle: "none",
					gap: "10px",
					height: "100px",
					width: "100%",
				}}
			>
				Follow us on:
				<li>
					<a href="./">Facebook</a>
					<a href="./">Instagram</a>
					<a href="./">LinkedIn</a>
				</li>
			</footer>
		</div>
	);
}

export default App;
