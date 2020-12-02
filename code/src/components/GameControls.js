import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../reducers/game';
import { chooseDirection, StartGame } from '../reducers/fetch';

import styled from 'styled-components';
import { Button, Background, ButtonWrapper, MainText } from './styling';
import Loader from './Loader';

const GameControls = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.name)
  const gameState = useSelector((state) => state.game.game)
  const gameArray = useSelector((state) => state.game.game.actions)
  const loader = useSelector((state) => state.game.isLoading)

  const onChooseDirection = (direction) => {
    dispatch(chooseDirection(userName, direction));
    dispatch(game.actions.setLoader(true));
  }

  return (
  <>
    {loader && <Loader />}
    <Background>
      
      <MainText>{gameState.description}</MainText>
      
      <ButtonWrapper>
      {!loader && gameArray && (gameArray.map((item, index) => {
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
  </>
  );
};

export default GameControls;