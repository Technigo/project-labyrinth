import React from 'react';

import { gamestate, gameStatus } from '../reducers/gamestate'

import styled from 'styled-components';

//NOT DONE UNDER CONSTRUCTION!!!!

export const TheEnd = () => {
    const [username, setUsername] = useState('');

    return (
        <>
          <p>Congratulations {username}, you finished the game!</p>
          <Divider />
          <Description>{gameStatus.description}</Description>
          <button
        onClick={onRestartGame}>Restart game</button>
        </>
      );
    };    


export const Description = styled.section`  
width: 100%;
height: 100vh;
font-family: 'Philosopher', sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`