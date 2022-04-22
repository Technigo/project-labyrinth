import React from "react";
import GamePicture from '../assets/GameBoardImage.jpg';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components/macro'

import game, { continueGame } from "../reducers/game";

const devices = {
  mobile: '(min-wdith: 375px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)'
}

const GameContainer = styled.div`
 display: flex:
 flex-direction: column;
 height: 100vh;
`
const GameBoardPicture = styled.main`
background-image: url(${GamePicture});
background-position: bottom;
background-repeat: repeat;
}
`
const GameBoardInfo = styled.div`
background-color: rgba(0, 0, 0, 0.5);
 padding: 0 10px 10px 10px;
 font-weight: 500;
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 0px auto 5px;
 min-height: 220px;
 max-width: 585px;
 

 @media ${devices.tablet}{
  flex-direction: row;
  margin: 0px auto 0px;
  min-height: 150px;
  padding: 0 50px 40px 30px;
 }
 
 `
const GameDescription = styled.h3`
 background-color: rgba(0, 0, 0, 0.5);
 padding: 20px 10px 10px 10px;
 text-align: center;
 margin: 200px auto 0;
 max-width: 585px;

 @media ${devices.tablet}{
  margin: 200px auto 0px;
  padding: 40px 50px 0px 30px;
 }

 @media ${devices.desktop}{
  margin: 60px auto 0px;
  padding: 40px 50px 0px 30px;
 }
 `

const RestartButton = styled.button` 
  font-size: 16px;
  padding: 8px;
  font-family: 'Inconsolata', monospace, 'Open Sans', sans-serif;
`
const DirectionButton = styled.button`
font-family: 'Inconsolata', monospace, 'Open Sans', sans-serif;
font-size: 12px;
padding: 6px;
background-color: #C4B7CB;

@media ${devices.tablet}{
  font-size: 16px;
  padding: 8px;
 }

@media ${devices.desktop} {
  cursor: pointer;
  
`

const WrapContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const TextDescription = styled.p` 
 text-align: center;

 @media ${devices.tablet}{
  width: 200px;
  padding: 37px;
 }

 @media ${devices.desktop}{
  width: 290;
  padding: 15px;
 }
`

const GameScreen = ({ username }) => {
  const currentStep = useSelector((store) => store.game.currentStep);
  const history = useSelector((store) => store.game.history);
  const userActions = useSelector((store) => store.game.currentStep.actions)

  const dispatch = useDispatch();

  const onGameRevert = () => {
    dispatch(game.actions.setHistory());
  };

  return (

    <GameBoardPicture>
      <GameContainer>
        {!userActions.length && 
        <RestartButton onClick={() => dispatch(game.actions.restart())}>
        Restart!
      </RestartButton>}
        
        <GameDescription>{currentStep.description}</GameDescription>
        <GameBoardInfo>
          {userActions.map((action) => (
            <WrapContainer key={action.direction}>
              <TextDescription>{action.description}</TextDescription>
              <DirectionButton onClick={() =>
                dispatch(continueGame(action.type, action.direction))}>
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
