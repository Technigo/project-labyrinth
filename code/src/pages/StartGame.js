import React, {useState} from 'react'
import { useDispatch } from 'react-redux';

import questions, {initiateGame } from '../reducers/questions';



const StartGame = () => {
    
  const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onUserNameSet = () => {
        dispatch(questions.actions.setUserName(inputValue));
        dispatch(initiateGame(inputValue));
    }
   
    return (
      <div>
            <p>Welcome to Labyrint! Enter your name to start playing.</p>
            <input
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <button onClick={onUserNameSet}>Start the game!</button>
        </div>
    )
}


export default StartGame