import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import ProductDecoration from "./components/ProductDecoration";

const productList = [
	{ id: 'decoration'},
	{ id: 'tableware'},
	{ id: 'vase'},
	{ id: 'cup'},
];


function App() {

	const hierarchicalHomeMenu = [
		{ name: 'Home', path: '/' },
	];

	const hierarchicalDecorationMenu = [
		{ name: 'Home', path: '/' },
		{ name: 'Decoration', path: '/decoration' },
	];

	const hierarchicalTablewareMenu = [
		{ name: 'Home', path: '/' },
		{ name: 'Tableware', path: '/tableware' },
	];

	const hierarchicalVaseMenu = [
		{ name: 'Home', path: '/' },
		{ name: 'Vase', path: '/vase' },
	];

	const hierarchicalCupMenu = [
		{ name: 'Home', path: '/' },
		{ name: 'Decoration', path: '/cup' },
	];

	const hierarchicalCupProductMenu = [
		{ name: 'Home', path: '/' },
		{ name: 'Cup', path: '/cup' },
		{ name: 'Product', path: '/cup/product' }
	];

	const hierarchicalVaseProductMenu = [
		{ name: 'Home', path: '/' },
		{ name: 'Vase', path: '/vase' },
		{ name: 'Product', path: '/vase/product' }
	];

	const hierarchicalTablewareProductMenu = [
		{ name: 'Home', path: '/' },
		{ name: 'Tableware', path: '/tableware' },
		{ name: 'Product', path: '/tableware/product' }
	];

	const hierarchicalDecorationProductMenu = [
		{ name: 'Home', path: '/' },
		{ name: 'Decoration', path: '/decoration' },
		{ name: 'Product', path: '/decoration/product' }
	];

	return (
		<>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<Home hierarchicalMenu={hierarchicalHomeMenu}/>}
					/>
					<Route
						exact
						path="/decoration"
						element={<Home hierarchicalMenu={hierarchicalDecorationMenu}/>}
					/>
					<Route
						exact
						path="/tableware"
						element={<Home hierarchicalMenu={hierarchicalTablewareMenu}/>}
					/>
					<Route
						exact
						path="/vase"
						element={<Home hierarchicalMenu={hierarchicalVaseMenu}/>}
					/>
					<Route
						exact
						path="/cup"
						element={<Home hierarchicalMenu={hierarchicalCupMenu}/>}
					/>
					{
						productList.map((product) => (
							<Route
								path={`/${product.id}/product`}
								element={<ProductDecoration hierarchicalMenu={
									product.id === 'cup' ? hierarchicalCupProductMenu :
										product.id === 'vase' ? hierarchicalVaseProductMenu :
											product.id === 'tableware' ? hierarchicalTablewareProductMenu :
												hierarchicalDecorationProductMenu} />}
							/>
						))
					}
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
