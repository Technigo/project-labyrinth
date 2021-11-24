import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextStep } from '../reducers/game'

export const InsideLabyrinth = () => {
  const { description, coordinates, actions } = useSelector(store => store.game.labyrinthData)
  /* const dispatch = useDispatch() */

const handleButtonClick = (type, direction) => {
  dispatchEvent(nextStep(type, direction))
}

  const ActionCard = ({ description, type, direction }) => (
    <div className='action-card'>
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </button>
    </div>
  )

  return (
    <section className='insideLabyrinth'>
      <h1>{description}</h1>
      <p>{coordinates}</p>
      {actions.lenght === 0 && <h3>You made it!</h3>}
      {actions.lenght > 0 && actions.map(item => <ActionCard key={item.direction} {...item} />)}
    </section>
  )
}