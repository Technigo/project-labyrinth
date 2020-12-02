import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../reducers/game';
import { chooseDirection, StartGame } from '../reducers/fetch';

import { Button, Background, ActionWrapper, MainText, HeaderText, History } from './styling';
import Loader from './Loader';

const GameControls = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.name)
  const gameState = useSelector((state) => state.game.game)
  const gameArray = useSelector((state) => state.game.game.actions)
  const loader = useSelector((state) => state.game.isLoading)
  const history = useSelector((state) => state.game.history)

  const onChooseDirection = (direction) => {
    dispatch(chooseDirection(userName, direction));
    dispatch(game.actions.setLoader(true));
    dispatch(game.actions.setHistory(direction));
  }
  console.log(gameState)

  const restartGame = () => {
    dispatch(game.actions.restartGame())
  }

  return (
  <>
    {loader && <Loader />}
    <Background>
      <HeaderText>{gameState.description}</HeaderText>
        {!loader && gameArray && (gameArray.map((item, index) => {
            return (
              <ActionWrapper>
              <MainText>{item.description}</MainText>
              <Button onClick={() => onChooseDirection(item.direction)} key={index}>
                Go {item.direction}
              </Button>  
              </ActionWrapper>          
              )
            })
          )
          }
          {gameState.coordinates === '1,3' && <Button onClick={() => restartGame()}>Restart game</Button>}
       
      {history.length > 0 && <MainText>Your journey so far</MainText>}
        <History>{history.map((item, index) => {
          return ( 
            <MainText key={index}>
              {index +1}) {item}
            </MainText>
            )
          })}
        </History>
      </Background>
  </>
  );
};

export default GameControls;