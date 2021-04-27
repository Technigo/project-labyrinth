import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {advanceGame } from '../reducers/labyrinth'

const Directions = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const dispatch = useDispatch()

  const nextStep = (argument) =>{
    dispatch(advanceGame(argument))
  }

  return (
    <>
      {actions.actions !== undefined &&
        actions.actions.map(direction => {
          return (
            < div key={direction.description} >
              <p>{direction.description}</p>
              <button onClick={() =>nextStep(direction)}>
                {direction.type} {direction.direction}
              </button>
            </div>
          )
        })}
    </>
  )
}

export default Directions;