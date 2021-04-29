import React from 'react'
import { useSelector } from 'react-redux'

const History = () => {
  const directionChoices = useSelector((store) => store.labyrinth.directionChoices)
  const directionSymbol = (direction) => {
    if (direction === "East") {
      return "➡"
    }
    if (direction === "West") {
      return "⬅"
    }
    if (direction === "North") {
      return "⬆"
    }
    if (direction === "South") {
      return "⬇"
    }

  }

  return (
    <div className="history-wrapper">
      <p>start </p>
      {directionChoices.map((step, index) => {
        return (
          <p style={{ marginLeft: index * 5 }} key={`${step}${Math.random()}`}>{directionSymbol(step)}</p>
  )
})}
    </div >
  )
}
export default History