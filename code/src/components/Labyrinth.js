import React from 'react';
import { useSelector } from 'react-redux';
// import { DuckContainer } from 'styled-components/GlobalStyles';
// import { DucklingHeader } from './DucklingHeader';
// import { game } from 'reducer/game';

export const PlayingGame = () => {
  const description = useSelector((store) => store.game.location);
  console.log(description)
  return (
    <>
      <DuckContainer>
        <DucklingHeader />
      </DuckContainer>
      <p key={description.description}>
      DESCRIPTION: {description.description}
      </p>
    </>
  )
}

/* import React from 'react';

const Labyrinth = () => {
  return <p> Labyrinth </p>
}

export default Labyrinth; */
