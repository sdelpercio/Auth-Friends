import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
	width: 100%;
	padding: 1rem 0;
	border-bottom: 1px solid black;
	background: linear-gradient(
		325deg,
		rgba(255, 255, 255, 0.6047516198704104) 50%,
		rgba(255, 255, 255, 0.6025917926565875) 100%
	);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	font-size: 2rem;
`;
export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #2a2a57;
	font-size: 2rem;

	&:hover {
		color: #6767d6;
		transition: color 0.5s ease;
	}
`;
export const StyledContainer = styled.div`
	width: 80%;
	margin: 1rem auto;
	text-align: center;
	background: linear-gradient(
		325deg,
		rgba(255, 255, 255, 0.6047516198704104) 50%,
		rgba(255, 255, 255, 0.6025917926565875) 100%
	);
	border-radius: 3px;
`;
export const StyledHeader = styled.h1`
	font-size: 2.5rem;
	color: #2a2a57;
`;
export const StyledCardContainer = styled.div`
	min-height: 50vh;
	width: 100%;
	padding: 0.5rem 0;
	margin: 1rem auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;
export const StyledCard = styled.div`
	width: 30%;
	font-size: 1.2rem;
`;
export const StyledButton = styled.button`
	text-decoration: none;
	color: black;
	font-size: 1rem;
	border: 2px solid red;
	border-radius: 2px;
	background-color: transparent;

	&:hover {
		background-color: white;
		transition: background-color 1s ease-out;
		cursor: pointer;
	}
`;
export const StyledForm = styled.form`
	text-align: center;
	background: linear-gradient(
		325deg,
		rgba(255, 255, 255, 0.6047516198704104) 50%,
		rgba(255, 255, 255, 0.6025917926565875) 100%
	);
	border-radius: 3px;
	min-height: 25vh;
	width: 80%;
	padding: 0.5rem 0;
	margin: 1rem auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;
export const StyledInput = styled.input`
	width: 30%;
	padding: 0.5rem 0;
	margin: 0.5rem 0;
	background: transparent;
	border: none;
	border-bottom: 1px solid #2a2a57;
	color: white;
`;
export const StyledLogin = styled.button`
	text-decoration: none;
	color: #2a2a57;
	font-size: 1rem;
	padding: 0.5rem 2rem;
	border: 2px solid #2a2a57;
	border-radius: 2px;
	background-color: transparent;

	&:hover {
		cursor: pointer;
		color: #6767d6;
		border: 2px solid #6767d6;
		transition: color 0.5s ease;
		transition: border 0.5s ease;
	}
	&:active {
		background: transparent;
	}
`;
