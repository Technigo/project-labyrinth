import React from 'react';
import { useSelector } from 'react-redux';


import { BoxShadow, Container, Button, Text, Header} from 'StyledComponents/GlobalStyles';

export const EndPage = () => {
  const currentState = useSelector((state) => state);

  return (
    <Container>
      <BoxShadow>
        <Header> To be Continued...</Header>
        <Text>{currentState.labyrinth.game.description}</Text>
        <Button onClick={() => window.location.reload()}> Restart </Button>
      </BoxShadow>
    </Container>
  );
};

// Flow ends.