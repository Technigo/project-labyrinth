import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { executeAction } from '../reducers/game'
import styled from 'styled-components'


const MoveButton = styled.button`
  background: black;
  color: #4CFF42;
  font-family: 'Inconsolata', monospace;
`

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
      <h3>Go {direction} </h3>
      <p>{description}</p>
      <p></p>
      <MoveButton onClick={handleOnClick}>Proceed</MoveButton>
    </div>
  )
}
