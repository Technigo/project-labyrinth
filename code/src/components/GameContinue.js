import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinth } from 'reducers/labyrinth';
import { Container, Text, Button, Hint } from '../StyledComponents/GlobalStyles';

import { generateGameProgress } from '../reducers/gameData';

export const GameContinue = () => { 
  const dispatch = useDispatch(); 
  const currentState = useSelector((state) => state);
  const playerName =  currentState.labyrinth.username;
  const actions = currentState.labyrinth.game.actions;
  

  const onGameContinue = (direction) => { 
    dispatch(generateGameProgress(playerName,direction));
  }

  const onGoBack = () => { 
    dispatch(labyrinth.actions.historyGoBack());
  }

  return(
    <Container>
      <Text>{currentState.labyrinth.game.description}</Text>
      {actions.map((action)=> 
     <Button key= {action.description} onClick={() => onGameContinue(action.direction)}> Go {action.direction}</Button>
    )}
    <Button onClick={onGoBack}>BACK</Button>
    <Hint> *HINT* {currentState.labyrinth.game.actions[0].description}</Hint>
    </Container>
  );
};