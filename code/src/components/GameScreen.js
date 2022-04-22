import React from "react";
import GamePicture from '../assets/GameBoardImage.jpg';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components/macro'

import game, { continueGame } from "../reducers/game";

const devices = {
  mobile: '(min-width: 375px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)'
}

const GameBoardPicture = styled.main`
background-image: url(${GamePicture});
background-position: bottom;
background-repeat: repeat;
display: flex;
justify-content: center;
height: 100vh;
`

const GameContainer = styled.div`
 display: flex:
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 40%;

 @media ${devices.tablet}{
  margin: 40% 10% 0 10% ;
 }

 @media ${devices.desktop}{
  margin: 10% 10% 0 10% ;
 }
`
const GameDescription = styled.h3`
 background-color: rgba(0, 0, 0, 0.5);
 padding: 20px 10px 10px 10px;
 text-align: center;
 margin-bottom: 0;

 @media ${devices.tablet}{
  margin: 0px auto 0px;
   max-width: 608px;
 }

 @media ${devices.desktop}{
  padding: 40px 50px 0px 30px;
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
 min-height: 220px;

 @media ${devices.tablet}{
  flex-direction: row;
 }
 @media ${devices.desktop}{
 
 }

 `

const RestartButton = styled.button` 
  font-size: 16px;
  padding: 8px;
  font-family: 'Inconsolata', monospace, 'Open Sans', sans-serif;

  @media ${devices.desktop}{
    cursor: pointer;
  }
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
justify-content: center;
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
  const userActions = useSelector((store) => store.game.currentStep.actions)

  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    isLoading === false && (
      <GameBoardPicture>
        <GameContainer>
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
            {!userActions.length && (
              <RestartButton onClick={() => dispatch(game.actions.restart())}>
                Restart!
              </RestartButton>
            )}
          </GameBoardInfo>
        </GameContainer>
      </GameBoardPicture>
    )
  )

};

export default GameScreen;
