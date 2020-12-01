import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { game, executeAction } from '../reducers/game'

export const Action = ({ props }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(props.description)
  const [direction, setDirection] = useState(props.direction)
  const [type, setType] = useState(props.type)
  const username = useSelector((store) => store.game.username);

  const handleOnClick = () => {
    dispatch(executeAction(username, type, direction))
  }

  return (
    <div>
      <p>____</p>
      <p>{description}</p>
      <p>{direction}</p>
      <button onClick={handleOnClick}>{type}</button>
      <p>____</p>
    </div>
  )
}
