import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { nextStep } from "../reducers/game"
import { game } from "../reducers/game"

//CSS STYLING IMPORT
import "./gameboard.css"

export const GameBoard = () => {
  // Using {} to get all the values in currentPosition
  const { description, actions } = useSelector(
    (store) => store.game.currentPosition
  )
  // ok att ha två useSelector?
  const history = useSelector((store) => store.game.history)
  // const currentPosition = useSelector((store) => store.game.currentPosition)

  // const restart = useSelector((store) => store.game.restartGame)

  const dispatch = useDispatch()

  const onButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction))
  }
  // Knappen fungerar inte riktigt, jag får fram rätt data i redux för history men knappen behöver skicka in props...
  const onButtonBackClick = () => {
    dispatch(game.actions.setHistory())
  }

  // A function that restarts the game by dispatching avtion to reset to initial state.
  const onRestart = () => {
    dispatch(game.actions.restartGame())
  }

  const ActionContainer = ({ description, type, direction }) => (
    <div className="action-container">
      <p>{description}</p>
      <button onClick={() => onButtonClick(type, direction)}>
        {type} {direction}
      </button>
    </div>
  )

  return (
    <section className="gameboard">
      <div className="top-description">
        {actions.length === 0 && <h3>You made it out,</h3>}
        <span className="title-wrapper">
          <h1>{description}</h1>
        </span>
      </div>
      {actions.length > 0 &&
        actions.map((item) => (
          <ActionContainer key={item.direction} {...item} />
        ))}
      <span className="button-wrapper">
        <button onClick={onButtonBackClick}>BACK</button>
        <button onClick={onRestart}> RESTART</button>
      </span>
    </section>
  )
}

//<p>{coordinates}</p>
