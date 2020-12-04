import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../reducers/game';
import { chooseDirection } from '../reducers/fetch';
import endImage from '../assets/pexels-ray-bilcliff-1533483.jpg';

import { Button, Background, ActionWrapper, MainText, HeaderText, History, EndImage, HeaderWrapper} from './styling';

const GameControls = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.name)
  const gameState = useSelector((state) => state.game.game)
  const gameArray = useSelector((state) => state.game.game.actions)
  const history = useSelector((state) => state.game.history)

  const onChooseDirection = (direction) => {
    dispatch(chooseDirection(userName, direction));
    dispatch(game.actions.setLoader(true));
    dispatch(game.actions.setHistory(direction));
  }

  const restartGame = () => {
    dispatch(game.actions.restartGame())
  }

  return (
  <>
      <Background>
        <HeaderWrapper>
          <HeaderText>{gameState.description}</HeaderText>
          {gameState.coordinates !== '1,3' && <MainText>Choose a direction!</MainText>}
          {gameState.coordinates === '1,3' && <EndImage src={endImage} alt="The end"></EndImage>}
        </HeaderWrapper>
        {gameArray && (gameArray.map((item, index) => {
          return (
              <ActionWrapper key={index}>
                <MainText>{item.description}</MainText>
                <Button onClick={() => onChooseDirection(item.direction)}>
                  Go {item.direction}
                </Button>  
              </ActionWrapper>          
              )
            })
          )
        }
      
      {gameState.coordinates === '1,3' && <Button onClick={() => restartGame()}>Restart game</Button>}
       
      {gameState.coordinates !== '1,3' &&
        <History>
          {history.length > 0 && <MainText>Your journey so far:</MainText>}
          {history.map((item, index) => {
          return ( 
            <MainText key={index}>
              {index +1}) {item}
            </MainText>
            )
          })}
        </History>
        }
      </Background>
  </>
  );
};

export default GameControls;