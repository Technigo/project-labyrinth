import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { playGame } from 'reducers/questions'
// import questions, { generateGamedata, playGame } from 'reducers/questions'

const GameScreen = () => {
    const gamedata = useSelector(store => store.questions.gamedata)
    const username = useSelector(store => store.questions.username)
    const dispatch = useDispatch()
    
    // const onNextStep = () => {
    //   dispatch(playGame())
    // }

    return (
      <div>
          <h1>Welcome {username}</h1>
          <h3>Now the adventure begins</h3>
          <h3>{gamedata.description}</h3>

          {gamedata.actions.map((act) => (
            <div key={gamedata.coordinates}>
            <h3>{act.description}</h3>
            <button 
            value={act.direction}
               onClick={() => dispatch(playGame())}>
               {act.direction}
            </button>
            </div>
          ))}
      </div>
    )
}

export default GameScreen