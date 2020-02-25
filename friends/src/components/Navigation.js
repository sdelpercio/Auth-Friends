import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<ul>
			<li>
				<Link to='/login'>Login</Link>
			</li>
			<li>
				<Link to='/friends-list'>Friends List</Link>
			</li>
		</ul>
	);
};
export default Navigation;
