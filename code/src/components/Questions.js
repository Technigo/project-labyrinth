import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen';
import GameScreen from './GameScreen'

const Questions = () => {
  const question = useSelector(store => store.questions.gamedata)
  console.log(question)

    return (
     <div>
         {question
           ? <GameScreen />
           : <StartScreen />
        }
     </div>
    )
}

export default Questions