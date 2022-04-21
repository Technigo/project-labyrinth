import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import questions, { playGame } from 'reducers/questions'

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
      <div>
          {/* <h1>Welcome {username}</h1> INTE NÖDVÄNDIG? Annars ngt if-statement
          <h3>Now the adventure begins</h3> */}
          <h3>{gamedata.description}</h3>
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
    )
}

export default GameScreen