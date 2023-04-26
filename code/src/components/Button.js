import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from 'reducers/game';

export const Button = () => {
  const dispatch = useDispatch()

  return (
    <button type="button" onClick={() => dispatch(startGame())}>
      Next step
    </button>
  )
}

// We dispatch our thunk in this component
// The fetchGame needs to be invoked because it returns the inner part of the function
// which then redux will go and fire more dispatches and dispatch all of those actions
// that we just wrote.