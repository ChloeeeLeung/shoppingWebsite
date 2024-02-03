import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import ProductDecoration from "./components/ProductDecoration";

function App() {

	const hierarchicalMenu = [
		{ name: 'Home', path: '/' },
		{ name: 'Decoration', path: '/decoration' },
		{ name: 'Candel Container', path: '/decoration/product' }
	];

	return (
		<>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<Home hierarchicalMenu={hierarchicalMenu}/>}
					/>
					<Route
						exact
						path="/decoration"
						element={<Home hierarchicalMenu={hierarchicalMenu}/>}
					/>
					<Route
						exact
						path="/tableware"
						element={<Home hierarchicalMenu={hierarchicalMenu}/>}
					/>
					<Route
						exact
						path="/vase"
						element={<Home hierarchicalMenu={hierarchicalMenu}/>}
					/>
					<Route
						exact
						path="/cup"
						element={<Home hierarchicalMenu={hierarchicalMenu}/>}
					/>
					<Route
						path="/decoration/product"
						element={<ProductDecoration/>}
					/>
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
