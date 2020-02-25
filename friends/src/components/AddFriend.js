import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = () => {
	const [newFriend, setNewFriend] = useState({
		name: '',
		age: '',
		email: ''
	});
	let history = useHistory();

	const handleChange = e => {
		setNewFriend({
			...newFriend,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/friends', newFriend)
			.then(res => {
				history.push('/friends-list');
			})
			.catch(err => {
				console.log('add friend error', err);
			});
	};

	return (
		<>
			<h1>Add a Friend</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					placeholder='name'
					value={newFriend.name}
					onChange={handleChange}
					required
				/>
				<input
					type='number'
					name='age'
					placeholder='age'
					value={newFriend.age}
					onChange={handleChange}
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='email'
					value={newFriend.email}
					onChange={handleChange}
					required
				/>
				<button>Add</button>
			</form>
		</>
	);
};
export default AddFriend;
