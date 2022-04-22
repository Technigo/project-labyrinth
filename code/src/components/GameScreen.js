import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import game, { continueGame } from "reducers/game";

const GameCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const GameText = styled.p`
margin: 20px;
font-size: 25px;

@media (min-width: 768px) {
  font-size: 40px;
}
`

const GameStepText = styled(GameText)`
font-size: 18px;
padding-bottom: 15px;

@media (min-width: 768px) {
  font-size: 30px;
}
`

const StepBtn = styled.button`
font-family: 'VT323', monospace;
border: 4px solid #0091E0;
background: white;
width: 200px;
height: 50px;
box-shadow: inset -6px -4px #1583BF;
text-transform: uppercase;
font-size: 30px;
box-shadow: 10px;
cursor: pointer;

&:hover {
  background-color: #0091E0;
  box-shadow: none;
  color: white;
  animation: animate 1.7s linear infinite;
}
  @keyframes animate {
   0%{
     opacity: 0;
   }
   50%{
     opacity: 1;
   }
   100%{
     opacity: 0;
   }
  }

`

const RestartBtn = styled(StepBtn)`
background-color: #00BC06;
border: 4px solid #00AD02;
box-shadow: inset -6px -4px #008402;

&:hover {
  background-color: #00BC06;
}
`

const GameScreen = () => {
  const gameStep = useSelector((store) => store.game.currentStep);
  const dispatch = useDispatch()
  
  if (gameStep.actions.length === 0) {
    return (
      <GameCard>
      <GameStepText>{gameStep.description}</GameStepText>
      <RestartBtn onClick={() => dispatch(game.actions.restart())}>RESTART</RestartBtn>
    </GameCard>
    )
  }
  
  return (
    <>
    <GameText>{gameStep.description}</GameText>
    {gameStep.actions?.map((step, index) => {
      return (
        <GameCard key={index}>
          <GameStepText>{step.description}</GameStepText>
          <StepBtn onClick={() => dispatch(continueGame(step.direction))}> Go {step.direction}</StepBtn>
        </GameCard>
      )
    })
  }
    </>
    )
}
export default GameScreen;
