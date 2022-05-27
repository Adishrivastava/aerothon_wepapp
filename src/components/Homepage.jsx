import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = (props) => {
	const navigate = useNavigate();
	return (
		<div id="homepage">
			<div className="main-section">
				<h1 className="heading1">
					Get Boiler-plate code, <span>quickly!</span>
				</h1>
				<h3 className="heading2">How do you want to get it?</h3>
				<div className="container">
					<div className="">
						<button onClick={() => navigate(`/cli`)}>
							Get it with CLI
						</button>
					</div>
					<div className="">
						<button onClick={() => navigate(`/download`)}>
							Download directly
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
