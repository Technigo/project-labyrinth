import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import labyrinth, { generateData } from '../reducers/labyrinth'



const Directions = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const dispatch = useDispatch()

  const nextStep = (event, argument) =>{
      dispatch(labyrinth.actions.setDirectionChoice(event.target.value))
      dispatch(generateData(argument))
      document.getElementById("textAnimation").innerHTML =""
    }

  return (
    <>
      {actions.actions !== undefined &&
        actions.actions.map(direction => {
          return (
            < div key={direction.description} >
              <p>{direction.description}</p>
              <button onClick={(event) =>nextStep(event, direction)} value={direction.direction}>
                {direction.type} {direction.direction}
              </button>
            </div>
          )
        })}
    </>
  )
}

export default Directions;