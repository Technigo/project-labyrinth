import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextAction, game } from '../reducers/game'

const Labyrinth = () => {
  const dispatch = useDispatch()

  const { actions, coordinates, description } = useSelector(
    (state) => state.game.currentCoordinates
  )

  // const store = useSelector((state) => state)
  // console.log(store)
  const showMap = useSelector((state) => state.game.storeCoordinates)
  // console.log(showMap)

  const handleActionBtn = (type, direction) => {
    dispatch(nextAction(type, direction))
  }

  const GameCard = ({ description, direction, type }) => (
    <div className='game-card'>
      <p>{description}</p>
      <button type='button' onClick={() => handleActionBtn(type, direction)}>
        {type} {direction.toUpperCase()}
      </button>
    </div>
  )

  return (
    <div>
      <p>Labyrinth!!!</p>
      <p>current coordinates: {coordinates}</p>
      <p>current description: {description}</p>
      {/* no actions -> the end of the labyrinth */}
      {actions.length === 0 && (
        <>
          <h1>You made it out!</h1>
          <button
            className='restart-btn'
            type='button'
            onClick={() => {
              dispatch(game.actions.restart())
            }}
          >
            Restart
          </button>
        </>
      )}
      {actions.length > 0 &&
        actions.map((action) => (
          <GameCard key={action.direction} {...action} />
        ))}
      <div className='show-map'>
        show coordinates:
        {/* do not use index, what can we use instead?? */}
        {showMap.map((action, index) => (
          <p key={index}>{action.coordinates}</p>
        ))}
      </div>
    </div>
  )
}

export default Labyrinth
