import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

import questions, { generateGamedata, playGame } from 'reducers/questions'

const GameScreen = () => {
    const gamedata = useSelector(store => store.questions.gamedata)
    const username = useSelector(store => store.questions.username)
    console.log(gamedata, 'hejhej')
    const dispatch = useDispatch()

    // const onNextStep = (username, act.direction) => {
    //     dispatch(generateGamedata(username, act.direction))
    // }


    return (
      <div>
          <h1>Welcome {username}</h1>
          <h3>The adventrue begins..</h3>
          <h3>{gamedata.description}</h3>
          
          {gamedata.actions.map((act) => (
            <div key={gamedata.description}>
            <h3>{act.description}</h3>
            <button 
            value={act.direction}
            onClick={() => dispatch(playGame(username, act.direction))}>
               {act.direction}
            </button>
            </div>
          ))}
      </div>
    )
}

export default GameScreen