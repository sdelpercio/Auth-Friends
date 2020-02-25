import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<div>
			<Navigation />
			<Switch>
				<PrivateRoute path='/friends-list/add' component={AddFriend} />
				<PrivateRoute path='/friends-list' component={FriendsList} />
				<Route path='/login' component={Login} />
				<Route component={Login} />
			</Switch>
		</div>
	);
}

export default App;
