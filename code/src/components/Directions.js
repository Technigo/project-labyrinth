import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAction } from 'reducers/labyrinth'

const Directions = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const [isActive, setActive] = useState('false')

  const dispatch = useDispatch()

  const toggleDisplay = () => {
    setActive(!isActive);
  }

  return (
    <>
      <button className={isActive ? null : 'instructions-btn'} type="button" onClick={toggleDisplay}>Click here to see directions</button>
      {actions.map((action) => {
        return (
          <div className={isActive ? 'hidden-instructions' : 'instructions'}>
            <p>{action.description}</p>
            <button type="button" onClick={() => dispatch(getAction(action.type, action.direction))}> Go {action.direction}</button>
          </div>
        )
      })}
    </>
  )
}

export default Directions