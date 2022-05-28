import React from 'react';

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
						<button
							onClick={() =>
								(window.location.href =
									'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/install-macos?alt=media&token=e3ad64a3-d361-4e77-9407-baabfbb09e3c')
							}
						>
							Mac OS
						</button>
					</div>
					<div className="">
						<button
							onClick={() =>
								(window.location.href =
									'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/install-win.exe?alt=media&token=868fbcd9-6f1d-4d36-97e1-8be525edab13')
							}
						>
							Windows OS
						</button>
					</div>
					<div className="">
						<button
							onClick={() =>
								(window.location.href =
									'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/install-linux?alt=media&token=f96e68bb-a07d-4fa7-83b4-938cbf88cd3a')
							}
						>
							Linux OS
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CLI;
