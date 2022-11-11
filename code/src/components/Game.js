/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAction } from 'reducers/game';
import styled from 'styled-components/macro'
import { GameCard } from './StyledComponents'
import { Background, StartBtn } from './StartPage';
import tree from '../assets/tree.jpeg'

const Game = () => {
  const currentPosition = useSelector((store) => {
    return store.game.currentPosition;
  });
  const dispatch = useDispatch();

  const onAction = (action) => {
    dispatch(fetchAction(action))
  };

  return (
    <ClonedBackground>
      <GameCard
        title={currentPosition.description}>
        <DescriptContainer>
          {currentPosition.actions.map((action) => (
            <DescInnerContainer key={action.description}>
              <p>{action.description}</p>
              <ActionButton
                onClick={() => onAction(action)}>
                {action.direction.toUpperCase()}
              </ActionButton>
            </DescInnerContainer>
          ))}
        </DescriptContainer>
      </GameCard>
    </ClonedBackground>
  )
};

export default Game;

const ActionButton = styled(StartBtn)`
  background-color: #344525;
  border-color: #5C7A42;
  box-shadow: 8px 10px 12px #688A4A;
`
const ClonedBackground = styled(Background)`
background-image: url(${tree});
`
const DescriptContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: stretch;
  text-align: center;
`
const DescInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  padding: 10px; 
  text-align: center;
`

