import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMoves } from 'reducers/gameInfo';

export const Buttons = () => {

  const actions = useSelector(store => store.gameDetails.gameDetails.actions)
  const userName = useSelector(store => store.gameDetails.userName)
  const dispatch = useDispatch();

  //what is action here
  const handleOnClick = (action) => {
    dispatch(getMoves(action, userName));
  }
  //here we map over an array of actions and show them in the predefined order
  //each button includes directions and on click fires up the getMoves fetch 
  return (
    <>
      {actions.map((action, index) => {
        return (
          <div key={action.description}>
            <p>{action.description}</p>
            <button onClick={() => handleOnClick(action)}>Go {action.direction}</button>
          </div>
        )
      })}
    </>
  )
}