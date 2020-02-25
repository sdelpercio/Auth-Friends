import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
	const [friends, setFriends] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axiosWithAuth()
			.get('/api/friends')
			.then(res => {
				console.log('friends response', res);
				setFriends(res.data);
				setLoading(false);
			})
			.catch(err => {
				console.log('friends error', err);
			});
	}, []);

	return (
		<>
			{loading ? (
				<h3>l o a d i n g . . .</h3>
			) : (
				<div>
					<h1>Friends List</h1>
					<div>
						{friends.map(friend => (
							<div key={friend.id}>
								<h3>Name: {friend.name}</h3>
								<p>Age: {friend.age}</p>
								<p>Email: {friend.email}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};
export default FriendsList;
