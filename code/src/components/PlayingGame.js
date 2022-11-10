import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro'
import uniqid from 'uniqid'

export const PlayingGame = () => {
  const data = useSelector((store) => store.game.location);
  const actions = useSelector((store) => store.game.step);

  console.log(data.actions)
  return (
    <>
      <GameContainer>
        <GameHeader />
      </GameContainer>
      <p key={data.description}>
        {/* DESCRIPTION: */} {data.description}
      </p>
      <div key={actions.actions}> {/* ACTIONS: */}{data.actions.map((location) => {
        return (
          <div key={uniqid()}>
            <p>{location.description}</p>
          </div>
        );
      })}
      <p>Where do you want to go?</p>
      </div>
    </>
  )
}

export const GameContainer = styled.div`
`;

export const GameHeader = styled.h1`
`;