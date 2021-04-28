import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { generateStartInstructions } from '../reducers/game';

const StartGame = () => { 
  const dispatch = useDispatch(); 
  const playerName = useSelector((state)=>state.labyrinth.username);

  // Thunk that performs the first POST request. Gets invoked by the start button 
  // and then dispatches an action so we get the first set of instructions.
  const onStartGame = () => { 
    dispatch(generateStartInstructions(playerName));
  };

  return(
    <div>
        <h3>Hello {playerName}!</h3>
        <h4>Press the Start button to get your first instructions 
          and then use the buttons to navigate through the Labyrinth. Have fun!
        </h4>
        <button onClick={onStartGame}> Start Game!</button>
    </div>
  );
};

export default StartGame