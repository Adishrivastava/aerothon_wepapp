import React, { useState } from 'react';

const options = {
	'react-django':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/django_react.zip?alt=media&token=fa25b70b-0599-4652-910f-831519a5294c',
	'react-flask':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/flask_react.zip?alt=media&token=cb552aca-ccc3-4b48-b322-a5db97ced021',
	'react-spring':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/react-springjava-main.zip?alt=media&token=f3c9fdcb-be99-49c5-b76a-dde86bd8788a',
	'react-laravel':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/react_laravel-main.zip?alt=media&token=1a84149e-344b-4c44-a889-2f48f1b3d2b5',
	'react-nodejs':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/NodeJS-React-main.zip?alt=media&token=70f2c2ff-a95b-46ff-aa6b-eda264439f7d',
	'angular-django':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/django_angular.zip?alt=media&token=cc7cd869-cbd3-4771-8fcf-2e5cf00d58fa',
	'angular-flask':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/flask_angular.zip?alt=media&token=1d23d99f-2621-4e9c-8bdd-635c28456067',
	'angular-spring':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/Angular_SpringJava-main.zip?alt=media&token=b360c84f-123e-4de2-803e-72c0f2a02194',
	'angular-laravel':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/angular_laravel-main.zip?alt=media&token=a6589d3e-d4cc-4dfb-a8d3-667f09c72717',
	'angular-nodejs':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/NodeJS-Angular-main.zip?alt=media&token=290ed39e-d12e-4a07-8ed2-76d9c2665e92',
	'vue-django':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/django_vue.zip?alt=media&token=5d53a580-20c8-474c-aade-a7b60ccbdbed',
	'vue-flask':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/flask_vue.zip?alt=media&token=b2f56f4c-e535-4915-9b99-375e8ae350e4',
	'vue-spring':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/Vue_SpringJava-main.zip?alt=media&token=76ce21d0-5901-4301-b3f5-6f859547fcef',
	'vue-laravel':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/vue_laravel-main.zip?alt=media&token=7ff2b02d-40bc-46ce-b40a-9e09338cf4d4',
	'vue-nodejs':
		'https://firebasestorage.googleapis.com/v0/b/nhpaerothon2.appspot.com/o/NodeJS-VueJS-main.zip?alt=media&token=c597b531-f5e8-495c-8dbf-0593195fa332',
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
