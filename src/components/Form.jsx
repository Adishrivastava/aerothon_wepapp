import React, { useState } from 'react';

const options = {
	'react-django':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon.appspot.com/o/django_react.zip?alt=media&token=8eac7374-fa59-42af-9d5b-54e2dfbbc497',
	'react-flask':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon.appspot.com/o/flask_react.zip?alt=media&token=59969a3e-fbb6-4b88-9565-e5dc9ec13055',
	'react-spring': '',
	'react-laravel': '',
	'react-nodejs': '',
	'angular-django':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon.appspot.com/o/django_angular.zip?alt=media&token=a2172156-d039-4e2c-9c5a-2aaea0cca7cc',
	'angular-flask':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon.appspot.com/o/flask_angular.zip?alt=media&token=dcce982f-4b30-4139-a55c-c03c98762a04',
	'angular-spring': '',
	'angular-laravel': '',
	'angular-nodejs': '',
	'vue-django':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon.appspot.com/o/django_vue.zip?alt=media&token=d67b9674-d17b-4010-ae92-5f9ddfee1010',
	'vue-flask':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon.appspot.com/o/flask_vue.zip?alt=media&token=910123f2-58ad-4638-9f85-d5989dc6ecd5',
	'vue-spring': '',
	'vue-laravel': '',
	'vue-nodejs': '',
};
const Form = (props) => {
	const [frontend, setFrontend] = useState('null');
	const [backend, setBackend] = useState('null');

	const frontendOptions = [
		{ value: 'react', label: 'react' },
		{ value: 'vue', label: 'vue' },
		{ value: 'angular', label: 'angular' },
	];
	const backendOptions = [
		{ value: 'django', label: 'django' },
		{ value: 'flask', label: 'flask' },
		{ value: 'spring', label: 'spring' },
		{ value: 'laravel', label: 'laravel' },
		{ value: 'nodejs', label: 'nodejs' },
	];

	// handleSubmit is a function passed down from the parent component
	// it is used to handle the form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(options[`${frontend}-${backend}`]);
		if (
			frontend === 'null' ||
			backend === 'null' ||
			!options[`${frontend}-${backend}`]
		) {
			alert('Please select both frontend and backend');
			return;
		}
		// console.log(options[`${frontend}-${backend}`]);
		// navigate to the /result route
		// Navigate(options[`${frontend}-${backend}`]);
		window.location.href = options[`${frontend}-${backend}`];
	};

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="frontend">Select Frontend</label>
					<div className="group">
						{frontendOptions.map((item) => (
							<button
								type="button"
								className={`options ${
									frontend === item.value && 'selected'
								}  `}
								onClick={() => setFrontend(item.value)}
							>
								{item.value}
							</button>
						))}
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="backend">Select Backend</label>
					<div className="group">
						{backendOptions.map((item) => (
							<button
								type="button"
								className={`options ${
									backend === item.value && 'selected'
								}  `}
								onClick={() => setBackend(item.value)}
							>
								{item.value}
							</button>
						))}
					</div>
				</div>

				{/* <a
					href={options[`${frontend}-${backend}`]}
					target="_blank"
					rel="noopener noreferrer"
				> */}
				<button type="submit">GET PACKAGE</button>
				{/* </a> */}
			</form>
		</div>
	);
};

export default Form;
