import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
	const [friends, setFriends] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axiosWithAuth()
			.get('/api/friends')
			.then(res => {
				console.log('friends response', res);
			})
			.catch(err => {
				console.log('friends error', err);
			});
	}, []);

	return (
		<>
			<h1>Friends List</h1>
		</>
	);
};
export default FriendsList;
