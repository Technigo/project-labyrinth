import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMoves } from 'reducers/gameInfo';
import { StyledButton } from 'lib/StyledButton'

export const Buttons = () => {
  const dispatch = useDispatch();
  const actions = useSelector(store => store.gameDetails.gameDetails.actions)
  const userName = useSelector(store => store.gameDetails.userName)

  const handleOnClick = (action) => {
    dispatch(getMoves(action, userName));
  }

  return (
    <>
      {actions.map((action, index) => {
        return (
          <div key={action.description}>
            <p>{action.description}</p>
            <StyledButton onClick={() => handleOnClick(action)}>{">"} go {action.direction}</StyledButton>
          </div>
        )
      })}
    </>
  )
}