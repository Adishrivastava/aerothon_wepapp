import React from 'react';
import image from '../assets/icons8-naira-96.png';

const Navbar = (props) => {
	// const navigate = useNavigate();
	return (
		<div className="navbar" onClick={console.log('hello')}>
			<a href="/">
				<div className="title">
					<img src={image} alt="N" />
					{/* NHP */}
				</div>
			</a>
		</div>
	);
};

export default Navbar;
