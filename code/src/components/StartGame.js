import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { generateStartInstructions } from '../reducers/gameData';
import { Text, Header, Button, Container, BoxShadow } from 'StyledComponents/GlobalStyles';

export const StartGame = () => { 
  const dispatch = useDispatch(); 
  const playerName = useSelector((state)=>state.labyrinth.username);

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