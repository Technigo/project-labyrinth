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
    //1. Want to display the description of each ACTION property, but fails the page on initial render due to game array empty initially
    //const actionDescription = useSelector(state => state.game.game.actions.description)
    console.log(description)
    console.log(actions)

    if (actions) {
      console.log('actions exist now')
      //2. Thus thought to render only if actions equals to true (exists). But cannot conditionally render useselector 
      //const actionDescription = useSelector(state => state.game.game.actions.description)
      //cannot put useselector inside here to be called conditionally (rules of hooks) - breaks the code
      //console.log(actionDescription)
      //3. Another solution could be to map over the actions array once it exists:
      actions.map(content => {
        return (
          console.log(content.direction),
          console.log(content.description)
        )
      })
      //4. How do we display this in the UI though?
    } else {
      console.log('actions do not exist yet')
    }

    const onChooseDirection = (index) => {
      setDirection(directionArray[index])
      dispatch(generateAction(index));
    }

  return (
      <div>
          <p>{description}</p>
          <p>{direction}</p>
            <button onClick={() => onChooseDirection(0)}>Go east</button>
            <button onClick={() => onChooseDirection(1)}>Go south</button>
            <button onClick={() => onChooseDirection(2)}>Go west</button>
            <button onClick={() => onChooseDirection(3)}>Go north</button>
    </div>  
  )
};

export default GameScreen;