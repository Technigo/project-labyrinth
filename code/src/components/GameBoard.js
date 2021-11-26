import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { nextStep } from "../reducers/game"
import { game } from "../reducers/game"
import { EndScreen } from "./EndScreen"

//CSS STYLING IMPORT
import "./gameboard.css"

export const GameBoard = () => {
  // Using {} to get all the values in currentPosition
  const { description, actions } = useSelector(
    (store) => store.game.currentPosition
  )

  const history = useSelector((store) => store.game.history)
  const dispatch = useDispatch()

  const onButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction))
  }

  // A function that go back onClick
  const onButtonBackClick = () => {
    dispatch(game.actions.setMoveBack())
  }

  // A function that restarts the game by dispatching action to reset to initial state.
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

  if (actions.length === 0) {
    return (
      <>
        <EndScreen />
        <span className="button-wrapper">
          <button onClick={onRestart}> RESTART</button>
        </span>
      </>
    )
  } else {
    return (
      <section className="gameboard">
        <div className="top-description">
          {/* {actions.length === 0 && <h3>...finally, you made it out.</h3>} */}
          {/* <span className="title-wrapper"> */}
          <h1>{description}</h1>
          {/* </span> */}
          {actions.length > 0 && <p>-where to go next?</p>}
        </div>
        {actions.length > 0 &&
          actions.map((item) => (
            <ActionContainer key={item.direction} {...item} />
          ))}
        <span className="button-wrapper">
          <button onClick={onButtonBackClick}>BACK</button>
          <button disabled={!history} onClick={onRestart}>
            {" "}
            RESTART
          </button>
        </span>
      </section>
    )
  }
}

//<p>{coordinates}</p>
