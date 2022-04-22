import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';

import questions, { playGame } from 'reducers/questions'


const StyledGameScreen = styled.div`
.game-screen {
  margin: 10px;
}

p {
  font-size: 24px;
  margin: 20px 0 10px;
}

button {
  margin: 0 0 20px 0;
}
`

const GameScreen = () => {
    const gamedata = useSelector(store => store.questions.gamedata)
    
    const dispatch = useDispatch()
    
    const onNextStep = (type, direction) => {
      dispatch(playGame(type, direction))
    }


    const ActionCard = ({ description, type, direction }) => (
      <div className='action-card'>
        <p>{description}</p>
        <button onClick={() => onNextStep(type, direction)}>
          Head {direction.toLowerCase()}
        </button>
      </div>
    )

    return (
      <StyledGameScreen>
      <div className='game-screen'>
          {/* <h1>Welcome {username}</h1> INTE NÖDVÄNDIG? Annars ngt if-statement
          <h3>Now the adventure begins</h3> */}
          <p>{gamedata.description}</p> 
          {gamedata.actions.length === 0 && (
            <button 
            type="button"
            onClick={() => dispatch(questions.actions.resetGame())}>
            RESTART GAME 
          </button>)}
          {gamedata.actions.length > 0 && 
          gamedata.actions.map((item) => <ActionCard key={item.direction} {...item} />)
        }
      </div>
      </StyledGameScreen>
    )
}

export default GameScreen