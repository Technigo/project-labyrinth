import React from 'react'
import { useSelector } from 'react-redux'

const History = () => {
  const directionChoices = useSelector((store) => store.labyrinth.directionChoices)
  const actions = useSelector(store => store.labyrinth.actions)
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
    <div className="path-wrapper">
    <p className="step-heading">Your Path</p>
    <div className="history-wrapper">
      <p className="step-arrow">start</p>
      {directionChoices.map((step) => {
        return (
          <p className="step-arrow" key={`${step}${Math.random()}`}>{directionSymbol(step)}</p>
        )
      })}
      {actions.coordinates === "1,3" && <p className="step-arrow">finish</p>}
    </div >
    </div>
  )
}
export default History