import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../reducers/game';
import { chooseDirection, StartGame } from '../reducers/fetch';

import styled from 'styled-components';
import { Button, Background, ButtonWrapper, MainText } from './styling';

const GameControls = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.name)
  const gameState = useSelector((state) => state.game.game)
  const gameArray = useSelector((state) => state.game.game.actions)

  const onChooseDirection = (direction) => {
    dispatch(chooseDirection(userName, direction))
  }


  return (
    <Background>
      <MainText>{gameState.description}</MainText>
      
      <ButtonWrapper>
      {gameArray && (gameArray.map((item, index) => {
          return (
            <Button onClick={() => onChooseDirection(item.direction)} key={index}>
              {item.direction}
            </Button>
            )
          })
        )
      }
      </ButtonWrapper>
    </Background>
  );
};

export default GameControls;