import React from 'react'
import Labyrinth, { continueGame } from "reducers/Labyrinth";
import { useDispatch } from "react-redux";
import labyrinth from 'reducers/Labyrinth';


export const Direction = ({ direction, setDirection }) => {
 
  const dispatch = useDispatch();



  const click = () => {

   
      dispatch(labyrinth.actions.setAction(direction))
      dispatch(continueGame())
    }


  

  return (
    <div>
    <button
    value={direction}
    onChange={(e) => setDirection(e.target.value)}
    onClick={click}
    >

      <p>{direction}</p> 
    </button>
  </div>
  )
}
