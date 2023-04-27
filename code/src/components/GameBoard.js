import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import game, { generateMoves } from 'reducers/game'
import styled, { keyframes } from 'styled-components/macro';
import { Button } from './Button'
// import { Loading } from './Loading'

const blinkingEffect = () => {
  return keyframes`
50% {
      opacity: 0;
    }
  `
}

const GameContainer = styled.div`
display: flex; 
position: relative; 
align-content: center;
flex-direction:column; 
background: #ffff;
justify-content: center;
margin: 20px;
gap: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

@media (min-width:1024px) {
  align-self: center;
  margin: 2% 25% 5%; 

}
`

const GameContent = styled.div`
display: flex; 
flex-direction: column;
padding: 30px; 
`

const CurrentStyled = styled.p`
font-weight: 700;
border: 2px solid black; 
margin-bottom: 10px;
padding: 5%;

@media (min-width:667px) {
font-size: 24px;
}

`

const StyledOption = styled.div`
padding:5%;
display: flex; 
flex-wrap: wrap;
flex-direction:column; 
border: 2px dotted black;
flex-basis: 40%
flex-wrap:wrap;
margin-bottom: 20px;

`

const StyledQuestion = styled.h3`
text-align: center; 
color: red;
font-weight: 700;
margin: 10px;

@media (min-width:1024px) {
font-size: 24px;

}
`
const OptionDescription = styled.p`
margin-bottom: 15px;
font-size: 14px;

@media (min-width:667px) {
font-size: 20px;

}
`

const WinnerText = styled.p`
text-align:center;
font-size: 22px;
font-weight: 700;
color: green;
overflow: hidden;
animation: ${blinkingEffect} 1.5s ease-in infinite; 


`

export const GameBoard = () => {
  const currentLocation = useSelector((store) => store.game.currentLocation)
  const dispatch = useDispatch();
  // const isLoading = useSelector((store) => store.ui.isLoading)

  const restartGame = () => {
    dispatch(game.actions.restartGame())
  }

  return (
    <GameContainer>
      {/* {isLoading && <Loading />}
      {!isLoading && ( */}
      <GameContent>
        <CurrentStyled>{currentLocation?.description} </CurrentStyled>
        {currentLocation.coordinates !== '1,3' && <StyledQuestion> Where do you want to go next? </StyledQuestion>}
        <div>
          {currentLocation?.actions?.map((action) => {
            return (
              <StyledOption key={action.direction}>
                <OptionDescription>{action.description}</OptionDescription>
                <Button onClick={() => dispatch(generateMoves(action.direction))}>
                  {action.direction}
                </Button>
              </StyledOption>
            );
          })}
        </div>
        {currentLocation.coordinates === '1,3' && <div><WinnerText>Well done! You made it out alive!</WinnerText> <Button onClick={() => restartGame()}>Restart</Button></div>}
      </GameContent>
    </GameContainer>
  )
}
