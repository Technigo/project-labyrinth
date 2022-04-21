import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { generateAction } from '../reducers/games';

const GameScreen= () => {
    const dispatch = useDispatch();

    //state.game.game.description fungerar inte, hur kommer vi åt den?
    //Idéen var att displaya description i UI på rad 20
    //const description = useSelector(state => state.game.game)
    //console.log(description)

    const onChooseDirection = () => {
      dispatch(generateAction());
    }

  return (
      <div>
          <p>Display description here</p>
            <button onClick={onChooseDirection}>Go east</button>
    </div>  
  )
};

export default GameScreen;