import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro'
import Lottie from 'lottie-react';
import uniqid from 'uniqid'
import complete from 'lotties/complete'

export const PlayingGame = () => {
  const data = useSelector((store) => store.game.location);
  const actions = useSelector((store) => store.game.step);
  const coordinates = useSelector((store) => store.game.coordinates);
  console.log(data.coordinates)

  return (
    <GameContainer>
      <GameDescription key={data.description}>
        {/* DESCRIPTION: */} {data.description}
      </GameDescription>
      <GameActions key={actions.actions}>  {/* ACTIONS: */}{data.actions.map((location) => {
        return (
          <div key={uniqid()}>
            <p>{location.description}</p>
          </div>
        );
      })}
      <GameQuestion>Where do you want to go?</GameQuestion>
      </GameActions>
      {coordinates === '1,3' && (
        <Lottie className="animation" animationData={complete} loop="true" />
      )}
    </GameContainer>
  )
};

export const GameContainer = styled.div`
background-color: whitesmoke;
opacity: 0.8;
font-size: 12px;
padding: 5px 10px;
border-radius: 10px;
`;

export const GameHeader = styled.h1`
`;

export const GameDescription = styled.p`
font-style: italic;
`;

export const GameActions = styled.p`
font-style: bold;
`;

export const GameQuestion = styled.p`
font-weight: bold;
text-align: center;
`;