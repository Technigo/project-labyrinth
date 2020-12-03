import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { generateStartInstructions } from '../reducers/gameData';
import { Text, Header, Button, Container, BoxShadow } from 'StyledComponents/GlobalStyles';

export const StartGame = () => { 
  const dispatch = useDispatch(); 
  const playerName = useSelector((state)=>state.labyrinth.username);

  // Thunk that performs the first POST request. Gets invoked by the start button 
  // and then dispatches an action so we get the first set of instructions.
  const onStartGame = () => { 
    dispatch(generateStartInstructions(playerName));
  };

  return(
    <Container>
      <BoxShadow>
        <Header>Hello {playerName}!</Header>
        <Text>Press the Start button to get your first instructions 
          and then use the buttons to navigate through the Labyrinth. Have fun!
        </Text>
        <Button className="start-button" onClick={onStartGame}> Start Game!</Button>
      </BoxShadow>
    </Container>
  );
};

//Flow Map: 
// StartGame > Game Continue