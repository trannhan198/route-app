import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import View from './component/View';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="view" element={<View />} />
			</Routes>
		</div>
	);
}

export default App;
