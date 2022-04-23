import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { generateAction } from '../reducers/games';

const GameScreen = () => {
    const dispatch = useDispatch();
    let [direction, setDirection] = useState('');

    const directionArray = [
      'East',
      'South',
      'West',
      'North'
    ]

    const description = useSelector(state => state.game.game.description)
    const actions = useSelector(state => state.game.game.actions)

    console.log(description)
    console.log(actions)

    const onChooseDirection = (index) => {
      setDirection(directionArray[index])
      dispatch(generateAction(index));
    }

    let eastBtn = <button onClick={() => onChooseDirection(0)}>Go east</button>
    let southBtn = <button onClick={() => onChooseDirection(1)}>Go south</button>
    let westBtn = <button onClick={() => onChooseDirection(2)}>Go west</button>
    let northBtn = <button onClick={() => onChooseDirection(3)}>Go north</button>   

  return (
      <div>
          <p>{description}</p>
          {direction !== '' && <p>You chose to go: {direction}</p>}          
          {actions && 
          actions.map(content => 
              <div key={Math.random()}>
              <p style={{fontWeight: 'bold'}}>Alternative way:</p>
              <p>{content.direction}</p>              
              {content.direction === 'East' && eastBtn}
              {content.direction === 'South' && southBtn}
              {content.direction === 'West' && westBtn}
              {content.direction === 'North' && northBtn}
              <p>{content.description}</p>
              </div>)
          }          
          {/* Explanation for code: Seems like a bug in the api provided, there is a response with an empty actions array, where west is the only working direction to choose */}
          <p>{(actions && actions.length === 0) && westBtn}</p>
      </div>  
  )
};

export default GameScreen;