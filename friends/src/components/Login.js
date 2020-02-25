import React, { useState } from 'react';

const Login = () => {
	const [credentials, setCredentials] = useState({
		credentials: {
			username: '',
			password: ''
		}
	});

	const handleChange = e => {
		setCredentials({
			credentials: {
				...credentials,
				[e.target.name]: [e.target.value]
			}
		});
	};

	return (
		<>
			<form>
				<input type='text' name='username' placeholder='username' required />
				<input
					type='password'
					name='password'
					placeholder='password'
					required
				/>
				<button>Login</button>
			</form>
		</>
	);
};
export default Login;
