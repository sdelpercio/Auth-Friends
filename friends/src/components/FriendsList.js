import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import {
	StyledContainer,
	StyledHeader,
	StyledLink,
	StyledCardContainer,
	StyledCard,
	StyledButton
} from '../styled';

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
				<StyledContainer>
					<img
						src='https://fontmeme.com/permalink/200225/ae77d3250ba22a13bad693b7de9ef6d3.png'
						alt='gregor-miller-s-friends-font-font'
						border='0'
					/>
				</StyledContainer>
			) : (
				<StyledContainer>
					<StyledHeader>Friends List</StyledHeader>
					<StyledLink to='/friends-list/add'>Add Friend</StyledLink>
					<StyledCardContainer>
						{friends.map(friend => (
							<StyledCard key={friend.id}>
								<h3>Name: {friend.name}</h3>
								<p>Age: {friend.age}</p>
								<p>Email: {friend.email}</p>
								<StyledButton onClick={() => deleteFriend(friend.id)}>
									Delete
								</StyledButton>
							</StyledCard>
						))}
					</StyledCardContainer>
				</StyledContainer>
			)}
		</>
	);
};
export default FriendsList;
