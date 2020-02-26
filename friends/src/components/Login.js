import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { StyledForm, StyledHeader, StyledInput, StyledLogin } from '../styled';

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
				window.localStorage.setItem('token', res.data.payload);
				history.push('/friends-list');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<StyledHeader>Login</StyledHeader>
				<StyledInput
					type='text'
					name='username'
					placeholder='username'
					value={credentials.username}
					onChange={handleChange}
					required
				/>
				<StyledInput
					type='password'
					name='password'
					placeholder='password'
					value={credentials.password}
					onChange={handleChange}
					required
				/>
				<StyledLogin>Login</StyledLogin>
			</StyledForm>
		</>
	);
};
export default Login;
