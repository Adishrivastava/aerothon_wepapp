import React from 'react';
import { Link } from 'react-router-dom';

const CLI = (props) => {
	return (
		<div id="homepage">
			<div className="main-section">
				<h1 className="hading2">
					Which <span>Operating System</span> do you have?
				</h1>
				<div className="instuctions">
					<p>1. Click on the .exe file on your system.</p>
					<p>2. Run nhp command on command line.</p>
				</div>
				<div className="container">
					<div className="">
						<button>Mac OS</button>
					</div>
					<div className="">
						<button>Windows</button>
					</div>
					<div className="">
						<button>Linux</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CLI;
