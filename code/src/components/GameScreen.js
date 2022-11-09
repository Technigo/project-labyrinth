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

    return (
        <section>
        <RestartButton
        type="submit" 
        onClick={onRestartButton}>
            Restart
        </RestartButton>
        <Wrapper>
            <p>{description}</p>
            <p>{coordinates}</p>

            {moves && moves.map(move => (
        <InnerContainer key={move.description}>
             <p>{move.description}</p>
          <Button
            type="button"
            value={move.direction} 
            onClick={(event) => onChooseDirection(event)}>
                Move {move.direction}
        </Button>
        </InnerContainer>
  ))
  }
        </Wrapper>
         
           
           </section>
    )
}

export default GameScreen

const RestartButton = styled.button`
border: solid red 2px;
`
const Wrapper = styled.div`
border: solid green 2px;
`
const Button = styled.button`
border: solid blue 2px;
`
const InnerContainer = styled.button`
border: solid black 2px;
`


