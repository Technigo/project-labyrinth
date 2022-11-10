import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerAction, game } from 'reducers/quotes';
// import Actions from './Actions';

const Game = () => {
  const description = useSelector((store) => store.game.description)
  const actions = useSelector((store) => store.game.actions)
  const coordinates = useSelector((store) => store.game.coordinates)
  console.log('desc', description)

  const dispatch = useDispatch()

  const onDirectionButtonClick = (event) => {
    dispatch(game.actions.setDescription(event.target.value))
    dispatch(playerAction(actions))
  }

  const goToPreviousQuote = () => {
    dispatch(game.actions.setPrevious())
  }

  return (
    <section>
      <h2>{description.description}</h2>
      <p>{coordinates}</p>
      <button onClick={() => goToPreviousQuote()} type="button">go back</button>
      {actions && description.actions.map((action) => {
        return (
          <article key={description}>
            <button value={action.direction} onClick={(event) => onDirectionButtonClick(event)} type="button">{action.type} {action.direction}</button>
            <p>{action.description}</p>
          </article>
        )
      })}
    </section>
  )
}

export default Game;
