import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

const FriendsList = () => {
	const [friends, setFriends] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axiosWithAuth()
			.get('/api/friends')
			.then(res => {
				setFriends(res.data);
				setLoading(false);
			})
			.catch(err => {
				console.log('friends error', err);
			});
	}, []);

	const deleteFriend = id => {
		axiosWithAuth()
			.delete(`/api/friends/${id}`)
			.then(res => {
				setFriends(res.data);
			})
			.catch(err => console.log('delete error', err));
	};

	return (
		<>
			{loading ? (
				<h3>l o a d i n g . . .</h3>
			) : (
				<div>
					<h1>Friends List</h1>
					<Link to='/friends-list/add'>Add Friend</Link>
					<div>
						{friends.map(friend => (
							<div key={friend.id}>
								<h3>Name: {friend.name}</h3>
								<p>Age: {friend.age}</p>
								<p>Email: {friend.email}</p>
								<button onClick={() => deleteFriend(friend.id)}>Delete</button>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};
export default FriendsList;
