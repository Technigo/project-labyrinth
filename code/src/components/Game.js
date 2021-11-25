import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Starting } from './Starting';
import { Labyrinth } from './Labyrinth';
import { Loading } from './Loading';

export const Game = () => {
	const currentPosition = useSelector(
		(state) => state.labyrinthSlice.currentPosition
	);

	return (
		<MainContainer>
			{currentPosition ? <Labyrinth /> : <Starting />}
			<Loading />
		</MainContainer>
	);
};

const MainContainer = styled.main`
width:calc(100% - 20px);
margin:0 auto;
margin-top:10px;
padding:20px;
text-align: center;
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
background:rgba(255, 255, 255, 0.5);
height:calc(100vh - 70px);

 @media(min-width:599px) {
  width: 80%;
  max-width: 800px;
  margin-top: 40px;
  padding:40px;
  height:60vh;
 }
`
