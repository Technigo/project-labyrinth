import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateActionData } from 'reducers/labyrinth'
import styled from 'styled-components'

const Directions = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const [isActive, setActive] = useState('false')

  const dispatch = useDispatch()

  const toggleDisplay = () => {
    setActive(!isActive);
  }

  return (
    <FlexDiv>
      <button className={isActive ? null : 'instructions-btn'} type="button" onClick={toggleDisplay}>Click here to see directions</button>
      {actions.map((action) => {
        return (
          <div className={isActive ? 'hidden-instructions' : 'instructions'}>
            <p>{action.description}</p>
            <button type="button" onClick={() => dispatch(generateActionData(action.type, action.direction))}> Go {action.direction}</button>
          </div>
        )
      })}
    </FlexDiv>
  )
}

export default Directions

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `