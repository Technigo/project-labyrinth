import React from "react";
import GamePicture from '../assets/GameBoardImage.jpg';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components/macro'

import game, { continueGame } from "../reducers/game";

const GameContainer = styled.div`
 display: flex:
 flex-direction: column;
 height: 100vh;
`
const GameBoardPicture = styled.main `
background-image: url(${GamePicture});
background-position: bottom;
background-repeat: repeat;
}
`
const GameBoardInfo = styled.div`
background-color: rgba(0, 0, 0, 0.5);
 padding: 0 10px 10px 10px;
 display:flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 margin-left: 50px;
 margin-right: 50px;
 width: 600px;
 height: 200px;
 `
 const GameDescription = styled.h3`
 background-color: rgba(0, 0, 0, 0.5);
 padding: 10px 10px 0 10px;
 margin-bottom: 0;
 margin-right: 50px;
 margin-left: 50px;
 text-align: center;
 width: 600px;
 `

const GoBackButton = styled.button` 
  font-size: 16px;
  padding: 8px;
  font-family: 'Inconsolata', monospace, 'Open Sans', sans-serif;
`
const DirectionButton = styled.button `
font-family: 'Inconsolata', monospace, 'Open Sans', sans-serif;
font-size: 16px;
padding: 8px;
`

const WrapContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`

const TextDescription = styled.p` 
 text-align: center;

`

const GameScreen = ({username}) => {
  const currentStep= useSelector((store) => store.game.currentStep);
  const history = useSelector((store) => store.game.history);
  const userActions = useSelector ((store) => store.game.currentStep.actions)
  
  const dispatch = useDispatch();
  
  const onGameRevert = () => {
    dispatch(game.actions.setHistory());
  };

  return (

    <GameBoardPicture>
    <GameContainer>
        <GoBackButton disabled={!history.length} onClick={onGameRevert}>
        Go back
      </GoBackButton>
      <GameDescription>{currentStep.description}</GameDescription>
      <GameBoardInfo>
      {userActions.map((action) => (
          <WrapContainer key={action.direction}>
              <TextDescription>{action.description}</TextDescription>
              <DirectionButton onClick={() =>
                dispatch(continueGame(action.type, action.direction)) }>
                  Go to {action.direction}
              </DirectionButton>

          </WrapContainer>
      ))}
      </GameBoardInfo>
    </GameContainer>
    </GameBoardPicture>
  )
  
};

export default GameScreen;
