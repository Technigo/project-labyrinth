import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMoves } from 'reducers/gameInfo';
import { gameDetails } from 'reducers/gameDetails';

export const Buttons = () => {
  const dispatch = useDispatch();
  const actions = useSelector(store => store.gameDetails.gameDetails.actions)
  const userName = useSelector(store => store.gameDetails.userName)
  
  const handleOnClick = (action) => {
  dispatch(getMoves(action,userName));
  }

  return (
    <>
      {actions.map(item => {
        return (
          <>
            <p>{item.description}</p>
            <button onClick={handleOnClick(action)}>Go {item.direction}</button>
          </>
        )
      })}
    </>
  )
}