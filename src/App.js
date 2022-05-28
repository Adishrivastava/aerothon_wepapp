import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/App.css';
import Homepage from './components/Homepage';
import Download from './components/Download';
import CLI from './components/CLI';
import Nav from './components/Nav';

function App() {
	return (
		<div className="App">
			<Nav />
			<Router>
				<Routes>
					<Route path="" element={<Homepage />} />
					<Route path="/download" element={<Download />} />
					<Route path="/cli" element={<CLI />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
