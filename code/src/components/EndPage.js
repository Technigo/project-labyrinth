import React from 'react';
import { useSelector } from 'react-redux';
import { BoxShadow, Container, Text, Header} from 'StyledComponents/GlobalStyles';

export const EndPage = () => {
  const currentState = useSelector((state) => state);


  return (
    <Container>
      <BoxShadow>
        <Header> To be Continued...</Header>
        <Text>{currentState.labyrinth.game.description}</Text>
      </BoxShadow>
    </Container>
  );
};

// Flow ends.