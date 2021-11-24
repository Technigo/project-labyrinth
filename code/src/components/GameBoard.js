import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { nextStep } from "../reducers/game"
// import { game } from "../reducers/game"

export const GameBoard = () => {
  // Using {} to get all the values in currentPosition
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  )

  const dispatch = useDispatch()

  const onButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction))
  }

  // const onButtonBackClick = (event) => {
  //   dispatch(game.actions.setHistory(event.target.value))
  // }

  const ActionContainer = ({ description, type, direction }) => (
    <div className="action-container">
      {" "}
      <p>{description}</p>
      <button onClick={() => onButtonClick(type, direction)}>
        {" "}
        {type} {direction}
      </button>
    </div>
  )

  return (
    <section className="gameboard">
      <h1>{description}</h1>
      <p>{coordinates}</p>
      {actions.length === 0 && <h3> YAY! you made it!</h3>}
      {/* <button onClick={onButtonBackClick}>BACK</button> */}
      {actions.length > 0 &&
        actions.map((item) => (
          <ActionContainer key={item.direction} {...item} />
        ))}
    </section>
  )
}
