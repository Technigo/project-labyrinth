import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useDispatch } from 'react-redux';
import game, { nextStep } from 'reducers/game';

export const GameBoard = (props) => {
  // const { description, actions } = useSelector(
  const { game } = props;
  // (store) => store.game.position
  // const history = useSelector((store) => store.game.history)

  const dispatch = useDispatch()

  const onButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction))
  }

  /* A function that go back to previous steps onClick
const onButtonBackClick = () => {
    dispatch(game.actions.setMoveBack())
}

// A function that restarts the game by dispatching action to reset to initial state.
const onRestart = () => {
    dispatch(game.actions.restartGame())
} */

  const ActionContainer = ({ description, type, direction }) => (
    <div className="action-container">
      <p>{description}</p>
      <button onClick={() => onButtonClick(type, direction)}>
        {type} {direction}
      </button>
    </div>
  )
  if (actions.length === 0) {
    return <EndScreen />
  } else {
    return (
    <section className="gameboard">
      <div className="top-description">
        <h1>{description}</h1>
        {actions.length > 0 && <p>-where to go next?</p>}
      </div>
      {actions.length > 0
            && actions.map((item) => (
              <ActionContainer key={item.direction} {...item} />
            ))}
    </section>
  )
}