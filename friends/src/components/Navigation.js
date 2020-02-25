import React from 'react';

import { StyledNav, StyledLink } from '../styled';

const Navigation = () => {
	return (
		<StyledNav>
			<img
				src='https://fontmeme.com/permalink/200225/a51fa2f36800c4de11d2df5394898dab.png'
				alt='gregor-miller-s-friends-font-font'
				border='0'
			/>
			<StyledLink to='/login'>Login</StyledLink>
			<StyledLink to='/friends-list'>Friends List</StyledLink>
		</StyledNav>
	);
};
export default Navigation;
