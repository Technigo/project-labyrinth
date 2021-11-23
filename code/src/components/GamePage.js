import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Labyrinth, { fetchLabyrinth } from "reducers/Labyrinth";
import { useDispatch } from "react-redux";
import { Direction } from './Direction';





export const GamePage = () => {
  const labyrinth = useSelector(store => store.labyrinth.labyrinth)
  const username = useSelector(store => store.labyrinth.username)
 
  const dispatch = useDispatch();

  const [direction, setDirection] = useState('')
 
const start = () =>{

  dispatch(Labyrinth.actions.setLabyrinth("East"));


}




  return (
    <div>
       <p> Welcome {username} </p>
      <p> {labyrinth.description} </p>
      <p> {labyrinth.coordinates} </p>
   

        {labyrinth.actions.map(item =>
          <Direction
            direction={item.direction}
            key={item.description}
            direction={item.direction}
            setdDirection={setDirection}
            
             />)}

      

     
      </div>

  )
 }