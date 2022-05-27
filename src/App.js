import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/App.css';
import Homepage from './components/Homepage';
import Download from './components/Download';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="" element={<Homepage />} />
					<Route path="/download" element={<Download />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
