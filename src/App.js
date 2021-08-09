import "./App.css";
import { Provider } from "react-redux";
import { reduxStore } from "./redux-state/store";
import List from "./components/List";
import Cart from "./components/Cart";

export default function App() {
	return (
		<Provider store={reduxStore}>
			<div className="App">
				<header className="App-header">
					<Cart />
					<List />
				</header>
			</div>
		</Provider>
	);
}
