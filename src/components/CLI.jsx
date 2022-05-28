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
									'https://firebasestorage.googleapis.com/v0/b/nhpaerothon.appspot.com/o/install-macos?alt=media&token=a29f91b8-17ef-4c2e-8f13-5ba36dc50d4c')
							}
						>
							Mac OS
						</button>
					</div>
					<div className="">
						<button
							onClick={() =>
								(window.location.href =
									'https://firebasestorage.googleapis.com/v0/b/nhpaerothon.appspot.com/o/install-win.exe?alt=media&token=bd6d9702-3f11-45bb-8242-263efae568a2')
							}
						>
							Windows OS
						</button>
					</div>
					<div className="">
						<button
							onClick={() =>
								(window.location.href =
									'https://firebasestorage.googleapis.com/v0/b/nhpaerothon.appspot.com/o/install-linux?alt=media&token=d20a2223-f543-4944-989c-683816710486')
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
