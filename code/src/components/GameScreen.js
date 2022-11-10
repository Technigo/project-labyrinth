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
        dispatch(games.actions.setPreviousMove)
    }

    return (
        <OuterWrapper>
            <button 
              onClick={goToPreviousMove}
                type="button">Go back</button>
        <RestartButton
        type="submit" 
        onClick={onRestartButton}>
            Restart
        </RestartButton>
        <InnerWrapper>
            <h1>{description}</h1>
            <p>{coordinates}</p>

            {moves && moves.map(move => (
        <InnerContainer key={move.description}>
             <h2>{move.description}</h2>
          <Button
            type="button"
            value={move.direction} 
            onClick={(event) => onChooseDirection(event)}>
                Move {move.direction}
        </Button>
        </InnerContainer>
  ))
  }
        </InnerWrapper>
         
           
           </OuterWrapper>
    )
}

export default GameScreen

const OuterWrapper = styled.section `
border: solid yellow 2px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
// margin-top: 20%;
width: 60vh;
height: auto;
`

const InnerWrapper = styled.section `
border: solid brown 2px;
color: white;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
`

const RestartButton = styled.button`
border: solid red 2px;
`
const Button = styled.button`
border: solid blue 2px;
`
const InnerContainer = styled.div`
border: solid black 2px;
width: 100%;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
color: white;
button{
    margin: 10px;
    padding: 5px;
    border: solid white 2px;
    color: white;
    background: none;
    &:hover{
      background: white;
      color: black;
    }
}
`