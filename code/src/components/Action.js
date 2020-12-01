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
    console.log("WHO CLICKED ME!?")
    dispatch(executeAction(username, type, direction))
  }
  
  return (
    <div>
      <p>____</p>
      <p>{description}</p>
      <p>{direction}</p>
      <MoveButton onClick={handleOnClick}>do eeet</MoveButton>
      <p>____</p>
    </div>
  )
}
