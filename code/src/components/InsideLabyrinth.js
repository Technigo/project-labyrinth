import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { nextStep } from '../reducers/game'

export const InsideLabyrinth = () => {
  const { description, coordinates, actions } = useSelector(store => store.game.currentCoordinates)
  const dispatch = useDispatch()

  const setBgColor = () => {
    let bg = 'silver'
    switch (coordinates) {
      case '0,0':
        bg = 'pink'
        break
      case '1,0':
        bg = 'blue'
        break
      case '1,1':
        bg = 'green'
        break
      case '0,1':
        bg = 'yellow'
        break;
      case '0,2':
        bg = 'orange'
        break;
      case '0,3':
        bg = 'red'
        break;
      case '1,3':
        bg = 'grey'
        break;
      default:
        bg = 'silver'
    }
    return bg
  }

  const handleButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction))
  }

  const ActionCard = ({ description, type, direction }) => (
    <div className='action-card'>
      <p className='text desc-two'>desc2: {description}</p>
      <p className='text choice'>What will you do?</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </button>
    </div>
  )

  return (
    <section className='insideLabyrinth' style={{ background: setBgColor() }}>
      <p className='text coords'>
        You've ended up at the coordinates <strong>{coordinates}</strong>.
      </p>
      <p className='text desc-one'>
        desc1: {description}
      </p>

      {actions.length === 0 && <h1>You made it!</h1>}
      {actions.length > 0 && actions.map(item => 
        <ActionCard key={item.direction} {...item} />
      )}
    </section>
  )
}