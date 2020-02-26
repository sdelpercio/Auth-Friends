import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//rules:
// It has to have the same API as Route
// It renders a route and passes all props through it
// it checks if the user is authenticated

// rest operator , looks like spread operator. takes
const PrivateRoute = ({ component: Component, ...rest }) => {
	const token = window.localStorage.getItem('token');
	return (
		<Route
			{...rest}
			render={props => {
				if (token) {
					// return component
					return <Component {...props} />;
				} else {
					// redirect user to /login
					return <Redirect to='/login' />;
				}
			}}
		/>
	);
};
export default PrivateRoute;
