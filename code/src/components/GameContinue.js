import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { labyrinth } from 'reducers/labyrinth';
import { generateGameProgress } from '../reducers/gameData';
import { EndPage } from './EndPage';
import { Container, Text, Button, Hint, BoxShadow } from '../StyledComponents/GlobalStyles';

export const GameContinue = () => { 
  const dispatch = useDispatch(); 
  const currentState = useSelector((state) => state);
  const playerName =  currentState.labyrinth.username;
  const actions = currentState.labyrinth.game.actions;
  
  const onGameContinue = (direction) => { 
    dispatch(generateGameProgress(playerName,direction));
  };

  const onGoBack = () => { 
    dispatch(labyrinth.actions.historyGoBack());
  };

  if (actions.length === 0) { 
    return <EndPage/>
  };

  return(
    <Container>
      <BoxShadow>
        <Text>{currentState.labyrinth.game.description}</Text>
        {actions.map((action)=> 
          <Button key= {action.description} onClick={() => onGameContinue(action.direction)}> Go {action.direction}</Button>
        )}
        <Hint> *HINT* {currentState.labyrinth.game.actions[0].description}</Hint>
      </BoxShadow>
      <Button onClick={onGoBack}>BACK</Button>
    </Container>
  );
};
