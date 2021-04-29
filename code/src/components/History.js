import React from 'react' 
import {useSelector} from 'react-redux'

const History = () => {
const directionChoices = useSelector((store) => store.labyrinth.directionChoices)
const directionSymbol = (direction) => {
  if(direction === "East") {
    return "➡"
  }
  if(direction === "West"){
    return "⬅"
  }
  if(direction === "North"){
    return "⬆"
  }
  if (direction === "South") {
    return "⬇"
  }

}

  return (
    <div>
      <p>start </p> 
      {directionChoices.map(step => <p key={`${step}${Math.random()}`}>{directionSymbol(step)}</p>)}
    </div>
  )
}
export default History