import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchGame } from 'reducers/game';

export const Button = () => {
  const dispatch = useDispatch()

  return (
    <button type="button" onClick={() => dispatch(fetchGame())}>
      Next step
    </button>
  )
}

// We dispatch our thunk in this component
// The fetchGame needs to be invoked because it returns another function