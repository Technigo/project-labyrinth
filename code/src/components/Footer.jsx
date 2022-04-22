import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<StyledFooter href='https://www.freepik.com/vectors/pixel-game'>
			Pixel game vector created by stockgiu - www.freepik.com
		</StyledFooter>
	);
};

const StyledFooter = styled.a`
	color: black;
	position: absolute;
	bottom: 0%;
	background-color: rgba(255, 255, 255, 0.4);
	text-align: center;
	width: 100%;
`;

export default Footer;
