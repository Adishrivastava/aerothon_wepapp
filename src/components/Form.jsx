import React from 'react';
import { useNavigate } from 'react-router-dom';
// react component with a form with 2 select fields and a button
const Form = (props) => {
	let navigate = useNavigate();
	// handleSubmit is a function passed down from the parent component
	// it is used to handle the form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		navigate('/download');
	};

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<div className="cols">
					<div className="form-group">
						<label htmlFor="city">Frontend</label>
						<select
							name="city"
							className="form-control"
							id="city"
							required
						>
							<option value="">Select a Frontend technology</option>
							<option value="React">React</option>
							<option value="Angular">Angular</option>
							<option value="Vue">Vue</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="city">Backend</label>
						<select
							name="city"
							className="form-control"
							id="city"
							required
						>
							<option value="">Select a Backend technology</option>
							<option value="Nodejs">Nodejs</option>
							<option value="Django">Django</option>
							<option value="Flask">Flask</option>
							<option value="Laravel">Laravel</option>
							<option value="Spring">Spring</option>
						</select>
					</div>
				</div>

				<button>GET</button>
			</form>
		</div>
	);
};

export default Form;
