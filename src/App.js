import "./App.css";
import Header from "./components/Header";
import About from "./components/About.js";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<Container>
					<Header />
				</Container>
				<Container className="right">
					<Switch>
						<Route path="/projects">
							<Project />
						</Route>
						<Route path="/blog">
							<Blog />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/">
							<About />
						</Route>
					</Switch>
				</Container>
			</div>
		</Router>
	);
}

export default App;
