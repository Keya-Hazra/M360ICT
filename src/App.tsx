import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launch from "./pages/Launch";
import SingleLaunch from "./pages/SingleLaunch";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Launch />}></Route>
					<Route path="/single-launch/:id" element={<SingleLaunch />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
