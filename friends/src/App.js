import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
	return (
		<div>
			<Navigation />
			<Switch>
				<Route path='/friends-list' component={FriendsList} />
				<Route path='/login' component={Login} />
				<Route component={Login} />
			</Switch>
		</div>
	);
}

export default App;
