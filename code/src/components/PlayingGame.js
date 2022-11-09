import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro'
// import { DuckContainer } from 'styled-components/GlobalStyles';
// import { DucklingHeader } from './DucklingHeader';
// import { game } from 'reducer/game';

export const PlayingGame = () => {
  const description = useSelector((store) => store.game.location);
  console.log(description)
  return (
    <>
      <GameContainer>
        <GameHeader />
      </GameContainer>
      <p key={description.description}>
      DESCRIPTION: {description.description}
      </p>
    </>
  )
}

export const GameContainer = styled.div`
`;

export const GameHeader = styled.h1`
`;

/* import React from 'react';

const Labyrinth = () => {
  return <p> Labyrinth </p>
}

export default Labyrinth; */
