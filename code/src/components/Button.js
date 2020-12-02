import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { move } from 'reducers/gameInfo';

export const Button = () => {

  const actions = useSelector(store => store.gameDetails.gameDetails.actions)
  const dispatch = useDispatch()

  const handleOnClick = (action) => {
    dispatch(move(action))
  }

  return (
    <>
      {actions.map((action) => {
        return (
          <>
            <p>{action.description}</p>
            <button onClick={() => handleOnClick(action)}>Go {action.direction}</button>
          </>
        )
      })}
    </>
  )
}