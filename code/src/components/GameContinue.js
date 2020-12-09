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
  const currentCoordinates = currentState.labyrinth.game.coordinates;
  
  //Thunk that gets invoked by clicking the direction button and dispatches an action 
  // to make post requests and advance the game
  const onGameContinue = (direction) => { 
    dispatch(generateGameProgress(playerName,direction));
  };

  // Function that gets invoked by clicking the back button
  const onGoBack = () => { 
    dispatch(labyrinth.actions.historyGoBack());
  };

  const backgroundChange = () => {
    const background = document.body.style 
    if (currentCoordinates === "1,0") {
      return background.backgroundColor = "#2f3a4b";
    } else if (currentCoordinates === "1,1") {
      return background.backgroundColor = "#35445c";
    } else if (currentCoordinates === "0,1") {
      return background.backgroundColor = "#384c69";
    } else if (currentCoordinates === "0,2") {
      return background.backgroundColor = "#344f77";
    } else if (currentCoordinates === "0,3") {
      return background.backgroundColor = "#2e4f80";
    } else if (currentCoordinates === "1,3") {
        return background.backgroundColor = "#910591";
    } else {
      return background.backgroundColor = "#000000";
    }
  };
  window.onload = backgroundChange();

  // Conditional rendering of the end page, if the lenght of the actions 
  // array reaches 0 then the end page component will be mounted 
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

// Flow Map
// GameContinue > EndPage
