import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: '',
		password: ''
	});
	let history = useHistory();

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/login', credentials)
			.then(res => {
				console.log(res);
				window.localStorage.setItem('token', res.data.payload);
				history.push('/friends-list');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					placeholder='username'
					value={credentials.username}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					value={credentials.password}
					onChange={handleChange}
					required
				/>
				<button>Login</button>
			</form>
		</>
	);
};
export default Login;
