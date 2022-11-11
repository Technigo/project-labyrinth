import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import games, { GenerateQuestion } from '../reducers/games'
import styled from 'styled-components'
import Lottie from "lottie-react";
import complete from "lotties/complete";


const GameScreen = () => {
    const description = useSelector(store => store.games.description)
    const moves = useSelector(store => store.games.moves)
    const history = useSelector(store => store.games.history)
    const coordinates = useSelector(store => store.games.coordinates)

    const dispatch = useDispatch()

    const onChooseDirection = (event) => {
        dispatch(games.actions.setDirection(event.target.value))
        dispatch(GenerateQuestion())
    }

    const onRestartButton = () => {
        dispatch(games.actions.setUserName(''))
        window.location.reload()
    }

    const goToPreviousMove = () => {
        dispatch(games.actions.setPreviousMove())
    }

    return (
        <OuterWrapper>
          <ButtonsContainer>
            {history.length ?
          <GoBackButton 
            onClick={goToPreviousMove}>
                Go back
            </GoBackButton>
            : <></>
          }
            <RestartButton
            onClick={onRestartButton}>
                Restart
            </RestartButton>
          </ButtonsContainer>
        <InnerWrapper>
            <h1>{description}</h1>
            {/* <p>Your coordinates: {coordinates}</p> */}
            {moves && moves.map(move => (
          <InnerContainer key={move.description}>
              <h2>{move.description}</h2>
           <Button
             value={move.direction} 
             onClick={(event) => onChooseDirection(event)}>
                 Go {move.direction}
         </Button>
         </InnerContainer>
            ))}       
          {coordinates === '1,3' && (
            <>
            <Lottie className="animation" animationData={complete} loop={true}/>
            </>
          )}
        </InnerWrapper>
           </OuterWrapper>
    )
}

export default GameScreen

const OuterWrapper = styled.section `
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
position: relative;
width: 90vw;
height: 90vh;

p {
    font-size: 18px;
    color: white;
}

`

const InnerWrapper = styled.section `
color: white;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
h1 {
    font-size: 20px;
    @media (min-width: 667px) {
        font-size: 22px;
        width: 55vw;
  }
}
`

const ButtonsContainer = styled.div`
width: 100%;
top: 0;
display: flex;
flex-direction: row;
justify-content: space-between;
position: absolute;
`

const RestartButton = styled.button`
margin: 10px;
padding: 5px;
border: solid white 2px;
border-radius: 15px;
color: black;
background: white;
padding: 7px;
font-size: 16px;
&:hover{
  background: grey;
  color: black;
  border: grey;
}

@media (min-width: 667px) {
  font-size: 20px;
  padding: 7px;
  }
`

const Button = styled.button`
margin: 10px;
padding: 5px;
border: solid white 2px;
border-radius: 15px;
color: white;
background: none;
padding: 7px;
font-size: 16px;
&:hover{
  background: white;
  color: black;
}

@media (min-width: 667px) {
  font-size: 20px;
  padding: 7px;
  }
`

const GoBackButton = styled.button`
margin: 10px;
padding: 5px;
border: solid white 2px;
border-radius: 15px;
color: black;
background: white;
padding: 7px;
font-size: 16px;
&:hover{
  background: grey;
  color: black;
  border: grey;
}

@media (min-width: 667px) {
  font-size: 20px;
  padding: 7px;
  }
`
const InnerContainer = styled.div`
width: 100%;
padding: 10px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
color: white;

h2 {
    font-size: 16px;
    @media (min-width: 667px) {
      font-size: 18px;
  }
}
`