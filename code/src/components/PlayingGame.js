import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro'
import Lottie from 'lottie-react';
import uniqid from 'uniqid'
import complete from 'lotties/complete'

export const PlayingGame = () => {
  const data = useSelector((store) => store.game.location);
  const actions = useSelector((store) => store.game.step);

  return (
    <GameContainer>
      {/* This makes the description of current location in the game show */}
      <GameDescription key={data.description}>
        {data.description}
      </GameDescription>
      {/* This makes the text with available actions in the game show */}
      <GameActions key={actions.actions}>
        {data.actions.map((location) => {
          return (
            <div key={uniqid()}>
              <p>{location.description}</p>
            </div>
          );
        })}
        {/* This makes the question dissappear when you reach the goal */}
        {data.actions.length > 0 && <GameQuestion>Where do you want to go?</GameQuestion>}
      </GameActions>
      {/* This line makes the winner-animation and winner-text show only in the last page,
       when you reach the goal. */}
      {data.actions.length === 0 && <><Lottie loop className="animation" animationData={complete} /><WinText>YOU WIN!</WinText></>}
    </GameContainer>
  )
};

export const GameContainer = styled.div`
background-color: whitesmoke;
opacity: 0.8;
font-size: 13px;
padding: 5px 10px;
border-radius: 10px;

.animation{
  top:200px;
  left: 50px;
}
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

export const WinText = styled.p`
font-weight: bold;
text-align: center;
`;