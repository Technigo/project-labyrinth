import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { labyrinth } from '../reducers/labyrinth';
import { StartGame } from './StartGame';
import { GameContinue } from './GameContinue';
import { Container, Button, BoxShadow } from '../StyledComponents/GlobalStyles';
import { MainHeader, Form, InputText } from '../StyledComponents/CreatePlayerStyling';

export const CreatePlayer = () => { 
  const playerName = useSelector((state)=>state.labyrinth.username);
  const gameState = useSelector((state) => state.labyrinth.game);
  const dispatch = useDispatch();

  // Local state to store the username 
  const [username, setUsername] = useState('');

  // Function that handles the create player event 
  // by taking the value from the form input
  const handleCreatePlayer = (event) => { 
    setUsername(event.target.value);
  };

  // Function that handles the username submit, this is 
  // invoked on change in the form and dispatches an action 
  // that will update the username in the global state 
  const handleSubmitPlayerName = (event) => { 
    event.preventDefault();
    dispatch(labyrinth.actions.setPlayerName(username));
  };

  // Function that returns as "true" if there's a player name and no game coordinates in the global state
  // this will be used to conditionally render the start game component 
  const isStartingGame = () => { 
    return playerName && !gameState.coordinates;
  };

  // Function that returns as "true" if there's a player name and game coordinates in the global state
  // this will be used to conditionally render the start game component 
  const isContinuingGame = () => { 
    return playerName && gameState.coordinates;
  };
 
  // Conditional rendering by invoking the functions above
  if (isStartingGame()) {
    return <StartGame/>
  } else if (isContinuingGame()) { 
    return <GameContinue/>
  };

  return(
    <Container>
      <MainHeader>Welcome User!</MainHeader>
      <BoxShadow>
        <Form onSubmit={handleSubmitPlayerName}>
         <InputText
            type = "text"
            value = {username}
            onChange={(event) => handleCreatePlayer(event)}
            placeholder="Type your player name!"
            required/>
          <Button type="submit">
            Create Player
          </Button>
        </Form>
      </BoxShadow>
    </Container>
  );
};

// Flow Map: 
// CreatePlayer > Start Game > Game Continue

