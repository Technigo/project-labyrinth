import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAction } from 'reducers/labyrinth'
import styled from 'styled-components/macro'

const Directions = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const [isActive, setActive] = useState(false)

  const dispatch = useDispatch()

  const toggleDisplay = () => {
    setActive(!isActive);
  }

  return (
    <Direction>
      <DirectionBtn1 className={isActive ? 'hidden-btn' : null} type="button" onClick={toggleDisplay}>Directions</DirectionBtn1>
      {isActive && actions.map((action) => {
        return (
          <div>
            <DirectionText className="instructions">
              {action.description}
            </DirectionText>
            <DirectionBtn2 type="button" key={action.direction} onClick={() => dispatch(getAction(action.type, action.direction))}> Go {action.direction}</DirectionBtn2>
          </div>
        )
      })}
    </Direction>
  )
}

export default Directions;

const Direction = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-family: 'EB Garamond', serif;
  text-align: center;
`

const DirectionBtn1 = styled.button`
  color: #ba8f95;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  padding: 0.5rem 1rem;
  min-width: 8rem;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #ba8f95;
  font-size: 1.2rem; 
  margin: 10px;

  &.hidden-btn {
    display: none;
  }
`

const DirectionText = styled.div`
  background-color: #1c1f1f;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 10px 5px;
  width: 100%;
  animation: fadeIn 1s; 

  &.instructions {
    display: block;
  }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`

const DirectionBtn2 = styled.button`
  color: #97db4f;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  height: 34px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #97db4f;
  font-size: 1.2rem; 
  margin: 10px;
`

// eslint-disable-next-line max-len
/* This version applies the `hidden-btn` class to `DirectionBtn1` when `isActive` is false, which hides the button.
When `isActive` is true, the button is not hidden and the instructions are displayed. */
