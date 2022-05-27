import React, { useReducer } from 'react';
import reducer from './GithubReducer';
import Context from './GithubContext';

// githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
// githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const GithubState = (props) => {
	const initialState = {
		frontend: [],
		backend: [],
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	// Search Users
	const getFrontend = async (text) => {
		// const res = await fetch(
		// 	`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		// )
		// 	.then((res) => res.json())
		// 	.then((data) => data.items);
		dispatch({
			type: 'GET_FRONTEND',
			payload: {},
		});
	};

	return (
		<Context.Provider
			value={{
				frontend: state.frontend,
				backend: state.backend,
				getFrontend,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default GithubState;
