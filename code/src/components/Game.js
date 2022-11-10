/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAction } from 'reducers/game';
import styled from 'styled-components/macro'
import { GameCard } from './StyledComponents'
import { Background } from './StartPage';
import tree from '../assets/tree.jpeg'

const Game = () => {
  const currentPosition = useSelector((store) => {
    console.log(`currentPosition: ${JSON.stringify(store)}`)
    return store.game.currentPosition;
  });
  const dispatch = useDispatch();

  const onAction = (action) => {
    dispatch(fetchAction(action))
  };

  return (
    <ClonedBackground>
      <GameCard
        title={currentPosition.description}
        descriptionText="Adventurer">
        <div>
          {currentPosition.actions.map((action) => (
            <div key={action.description}>
              <p>{action.description}</p>
              <ActionButton
                onClick={() => onAction(action)}>
                {action.direction.toLowerCase()}
              </ActionButton>
            </div>
          ))}
        </div>
      </GameCard>
    </ClonedBackground>
  )
};

export default Game;

const ActionButton = styled.button`
  border-style: outset;
height: 60px;
width: 80px;
margin: 20px;
padding: 20px;
display: inline-block;
background-color: palegreen;
border-width: 5px;
box-sizing: border-box;
border-radius: 5%;
`
const ClonedBackground = styled(Background)`
background-image: url(${tree});

`