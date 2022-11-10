import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import games, {GenerateQuestion} from '../reducers/games'
import styled from 'styled-components'


const GameScreen = () => {
    const description = useSelector(store => store.games.description)
    const moves = useSelector(store => store.games.moves)
    // const history = useSelector(store => store.games.history)
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
        dispatch(games.actions.setPreviousMove()) //la till ('') och det ger effekt i redux tool men inget annat
    }

    return (
        <OuterWrapper>
          <ButtonsContainer>
          <GoBackButton 
            onClick={goToPreviousMove}>
                Go back
            </GoBackButton>
            <RestartButton
            onClick={onRestartButton}>
                Restart
            </RestartButton>
          </ButtonsContainer>
        <InnerWrapper>
            <h1>{description}</h1>
            {moves && moves.map(moves => ( //jag ändrade från move till moves men fick ingen skillnad i resultat
        <InnerContainer key={moves.description}>
             <h2>{moves.description}</h2>
          <Button
            value={moves.direction} 
            onClick={(event) => onChooseDirection(event)}>
                Go {moves.direction}
        </Button>
        </InnerContainer>
        ))}
        </InnerWrapper>
        <p>Your coordinates: {coordinates}</p>
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
    font-size: 22px;
    @media (min-width: 667px) {
        font-size: 40px;
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
    font-size: 18px;

    @media (min-width: 667px) {
      font-size: 22px;
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