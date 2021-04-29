import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { generateStartInstructions } from '../reducers/game';
import "nes.css/css/nes.min.css"
import styled from 'styled-components'; 

const Container = styled.div`
    width: 900px;
    height: 300px;
    margin-top: 50px;

    @media (min-width: 768px) {
      margin-top: 20px;
     };
`
const StartGame = () => { 
  const dispatch = useDispatch(); 
  const playerName = useSelector((state)=>state.labyrinth.username);

  // Thunk that performs the first POST request. Gets invoked by the start button 
  // and then dispatches an action so we get the first set of instructions.
  const onStartGame = () => { 
    dispatch(generateStartInstructions(playerName));
  };

  return(
    <Container className="nes-container is-dark with-title">
        <h3>Hello {playerName}!</h3>
        <h4>Press the Start button to get your first instructions 
          and then press the buttons to navigate through the Labyrinth.
        </h4>
        <button className="nes-btn is-success" onClick={onStartGame}> Start Game!</button>
    </Container>
  );
};

export default StartGame