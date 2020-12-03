import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { labyrinth } from '../reducers/labyrinth';
import { StartGame } from './StartGame';
import { GameContinue } from './GameContinue';
import { Container, Button } from '../StyledComponents/GlobalStyles';
import { MainHeader, Form, InputText } from '../StyledComponents/CreatePlayerStyling';


export const CreatePlayer = () => { 
  const playerName = useSelector((state)=>state.labyrinth.username);
  const gameState = useSelector((state) => state.labyrinth.game);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleCreatePlayer = (event) => { 
    setUsername(event.target.value);
  };

  const handleSubmitPlayerName = (event) => { 
    event.preventDefault();
    dispatch(labyrinth.actions.setPlayerName(username));
  };

  const isStartingGame = () => { 
    return playerName && !gameState.coordinates;
  };

  const isContinuingGame = () => { 
    return playerName && gameState.coordinates;
  };

  if (isStartingGame()) {
    return <StartGame/>
  } else if (isContinuingGame()) { 
    return <GameContinue/>
  };

  return(
    <Container>
    <MainHeader>Welcome User!</MainHeader>
    <Form onSubmit={handleSubmitPlayerName}>
      <InputText
        type = "text"
        value = {username}
        onChange={(event) => handleCreatePlayer(event)}
        placeholder="Type your alias name"
        required/>
        <Button type="submit">
          Create Player
        </Button>
    </Form>
    </Container>
  );
};

