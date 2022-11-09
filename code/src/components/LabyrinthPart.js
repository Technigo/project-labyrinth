/* eslint-disable array-callback-return */
import React from 'react'
import { generateActionData } from 'reducers/labyrinth'
import { useSelector, useDispatch } from 'react-redux'

const LabyrinthPart = () => {
  const description = useSelector((store) => store.labyrinth.description)
  const actions = useSelector((store) => store.labyrinth.actions)
  const dispatch = useDispatch()

  return (
    <>
      <p>{description}</p>
      {actions.map((action) => {
        return (
          <>
            <p>{action.description}</p>
            <button type="submit" onClick={() => dispatch(generateActionData(action.type, action.direction))}>{action.direction}</button>
          </>
        )
      })}
    </>
  )
}
export default LabyrinthPart