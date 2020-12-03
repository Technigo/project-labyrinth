import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMoves } from 'reducers/gameInfo';
//why this is not necessary
import { gameDetails } from 'reducers/gameDetails';

export const Buttons = () => {

  const actions = useSelector(store => store.gameDetails.gameDetails.actions)
  const userName = useSelector(store => store.gameDetails.userName)
  const dispatch = useDispatch();
  
  //what is action here
  const handleOnClick = (action) => {
  dispatch(getMoves(action,userName));
  }

  return (
    <>
      {actions.map((action, index) => {
        return (
          <div key={index}>
            <p>{action.description}</p>
            <button onClick={() => handleOnClick(action)}>Go {action.direction}</button>
          </div>
        )
      })}
    </>
  )
}