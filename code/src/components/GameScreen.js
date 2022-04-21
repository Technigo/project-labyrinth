import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { continueGame } from "reducers/game";

const GameCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const GameText = styled.p`
margin: 20px;
`

const StepBtn = styled.button`
font-family: 'VT323', monospace;
border: 4px solid #0091E0;
background: white;
width: 60%;
height: 50px;
box-shadow: inset -6px -4px gray;
text-transform: uppercase;
font-size: 30px;
box-shadow: 10px;
cursor: pointer;
`

const GameScreen = () => {
  const gameStep = useSelector((store)=> store.game.currentStep);
  const dispatch = useDispatch()
  return(
    <div>
      <GameText>{gameStep.description}</GameText>
      {console.log(gameStep.actions)}
      

     { gameStep.actions?.map((step) => {
        return(
          <GameCard>
        <GameText>{step.description}</GameText>
        <StepBtn onClick={()=>dispatch(continueGame(step.direction))}> Go {step.direction}</StepBtn>
        </GameCard>
        )
      })
      }


      {/* { gameStep.actions?.length === 0 ? gameStep.actions?.map((step) => {
        return(
          <GameCard>
        <GameText>{step.description}</GameText>
        <StepBtn> Restart </StepBtn>
        </GameCard>
        )
      }) : 
      gameStep.actions?.map((step) => {
        return(
          <GameCard>
        <GameText>{step.description}</GameText>
        <StepBtn onClick={()=>dispatch(continueGame(step.direction))}> Go {step.direction}</StepBtn>
        </GameCard>
        )
      })
     }  */}
    </div>
  )
}
export default GameScreen;
