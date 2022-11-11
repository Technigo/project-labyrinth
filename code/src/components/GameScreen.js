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

    // const onChooseDirection = (type, direction) => {
    //   dispatch(GenerateQuestion(type, direction));
    // }

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
            {moves && moves.map(move => ( //jag ändrade från move till moves men fick ingen skillnad i resultat
          <InnerContainer key={move.description}>
              <h2>{move.description}</h2>
           <Button
             value={move.direction} 
             onClick={(event) => onChooseDirection(event)}>
             {/* onClick={() => onChooseDirection(moves.type, moves.direction)}> */}
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
/* border: solid yellow 2px; */
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
// margin-top: 20%;
/* width: 90%; */
margin: 0 20px;
height: auto;

p {
    font-size: 18px;
    color: white;
}

@media (min-width: 667px) {
    width: 60vw;
  }
`

const InnerWrapper = styled.section `
/* border: solid brown 2px; */
color: white;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;

h1 {
    font-size: 20px;
    @media (min-width: 667px) {
        font-size: 22px;
  }
}
`

const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
`

const RestartButton = styled.button`
margin: 10px;
padding: 5px;
border: solid white 2px;
border-radius: 15px;
color: white;
background: none;
padding: 7px;
font-size: 18px;
&:hover{
  background: white;
  color: black;
}

@media (min-width: 667px) {
  font-size: 22px;
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
font-size: 18px;
&:hover{
  background: white;
  color: black;
}

@media (min-width: 667px) {
  font-size: 22px;
  padding: 7px;
  }
`

const GoBackButton = styled.button`
margin: 10px;
padding: 5px;
border: solid white 2px;
border-radius: 15px;
color: white;
background: none;
padding: 7px;
font-size: 18px;
&:hover{
  background: white;
  color: black;
}

@media (min-width: 667px) {
  font-size: 22px;
  padding: 7px;
  }
`
const InnerContainer = styled.div`
/* border: solid black 2px; */
width: 100%;
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


/* button{
    margin: 10px;
padding: 5px;
border: solid white 2px;
border-radius: 15px;
color: white;
background: none;
padding: 7px;
font-size: 18px;
&:hover{
  background: white;
  color: black;
}

@media (min-width: 667px) {
  font-size: 22px;
  padding: 7px;
  }
} */
`