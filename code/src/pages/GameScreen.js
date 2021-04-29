import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { generateNextQuestion } from '../reducers/questions'

const GameScreen = () => {
    const gameStatus = useSelector(store => store.questions.gameStatus)
    const userName = useSelector(store => store.questions.userName)

    const dispatch = useDispatch()

    //const onQuestionRegenerate = (tag) => {
        //dispatch(generateNextQuestion(tag))

   // }

   return (
       <div>
           <h1>{gameStatus.description}</h1>
           {gameStatus.actions.map(action => (
               <div>
                 <p>{action.description}</p>
								 <button
								 key={userName}
								 onClick={() => dispatch(generateNextQuestion(userName, action.direction))}
								 >{action.direction}</button>
               </div>

           ))}
       </div>
   )
}
export default GameScreen
