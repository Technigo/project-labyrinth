import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerAction, game } from 'reducers/quotes';
// import Actions from './Actions';

const Game = () => {
  const description = useSelector((store) => store.game.description)
  console.log('desc', description)

  const dispatch = useDispatch()

  const onDirectionButtonClick = (actions) => {
    dispatch(playerAction(actions))
  }

  const goToPreviousQuote = () => {
    dispatch(game.actions.setPrevious())
  }

  return (
    <section>
      <h2>{description.description}</h2>
      <button onClick={() => goToPreviousQuote()} type="button">go back</button>
      {description.actions.map((action) => <button onClick={() => onDirectionButtonClick} type="button">{action.direction}</button>)}
    </section>
  )
}

export default Game;
