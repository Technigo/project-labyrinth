import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gamestate } from '../reducers/gamestate';

import {Container, Wrapper} from '../styled-components/GameWrapperStyling';

//const Container = styled.section`
//  display: flex;
//  justify-content: center;
//  flex-direction: column;
//  align-items: center;
//  height: 100vh;
//`
//const Wrapper = styled.section`
//  width: 70%;
//  padding: 20px;
//  text-align: center;
//  color: #fff;
//  background-color: hsla(0,0%,100%,.06274509803921569);
//  backdrop-filter: blur(4px);
//  font-family: 'M PLUS Code Latin';

//  button {
//    margin-top: 6px;
//    padding: 8px;
//    border-radius: 5px;
//    border: 2px solid #C2D200;
//    background-color: black;
//    color:white;

//	:hover {
//		background: white;
//		color: black;
//		border: 1px solid black;
//	}
//  } 
//`
 
export const TheEndGame = () => {
  const currentUser = useSelector((state) => state.gamestate.username);
  const gameStatus = useSelector((state) => state.gamestate.gameStatus);

	const dispatch = useDispatch();

	const onGameRestart = () => {
		dispatch(gamestate.actions.setRestartGame())
	}

  return (
    <Container>
      <Wrapper>
        <h1>Congratulations <span>{currentUser}</span>, you made it to the other side!</h1>
        <p>{gameStatus.description}</p>
        <button onClick={onGameRestart}>Play Again</button>
      </Wrapper>
    </Container>  
  );
};
