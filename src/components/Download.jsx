// react component with 2 buttons and some text in the middle in h1 tag
import React from 'react';

const Download = (props) => {
	return (
		<div id="homepage">
			<h1>How would you like to get the webapp</h1>
			<div className=" form cols">
				<button className="btn">Downlaod directly</button>
				<button className="btn">Get it with CLI</button>
			</div>
		</div>
	);
};

export default Download;
