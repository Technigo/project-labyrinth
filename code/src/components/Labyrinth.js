import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { nextAction, game } from '../reducers/game'

const Labyrinth = () => {
  const dispatch = useDispatch()

  const { actions, description } = useSelector(
    (state) => state.game.currentCoordinates
  )

  // const store = useSelector((state) => state)
  // console.log(store)
  const showMap = useSelector((state) => state.game.storeCoordinates)
  // console.log(showMap)

  const username = useSelector((state) => state.game.username)

  const handleActionBtn = (type, direction) => {
    dispatch(nextAction(type, direction))
  }

  // prop "description" is already declared on line 9
  // renamed the prop "description" to "actionDescription"
  const GameCard = ({ description: actionDescription, direction, type }) => (
    <div className='game-card'>
      <p>{actionDescription}</p>
      <button type='button' onClick={() => handleActionBtn(type, direction)}>
        {type} {direction.toUpperCase()}
      </button>
    </div>
  )

  return (
    <div className='labyrinth-page'>
      <p>{description}</p>
      {/* no actions left -> display the end of the labyrinth */}
      {actions.length === 0 && (
        <>
          <div className='ending-message'>
            <h1>
              <span className='username'>{username}</span>, you made it out of
              the maze!
            </h1>
            <p>
              number of moves: <span>{showMap.length}</span>
            </p>
            <button
              className='restart-btn'
              type='button'
              onClick={() => {
                dispatch(game.actions.restart())
              }}
            >
              Restart
            </button>
          </div>
        </>
      )}
      <div className='gamecards-container'>
        {actions.length > 0 &&
          actions.map((action) => (
            <GameCard key={action.direction} {...action} />
          ))}
      </div>
      <div className='show-map'>
        <div className='map'>
          {showMap.map((action, index) => {
            // const previousCoordinate =
            //   index === 0 ? '0,0' : showMap[index - 1].coordinates

            // const [previousX, previousY] = previousCoordinate.split(',')
            // split up the X-, and Y-coordinate
            const [currentX, currentY] = action.coordinates.split(',')
            // const width = currentX - previousX
            // const height = currentY - previousY

            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={
                  index === showMap.length - 1
                    ? 'active-position'
                    : 'prev-position'
                }
                style={{
                  // width: Math.max(Math.abs(width * 20), 1),
                  // height: Math.max(Math.abs(height * 20), 1),
                  // bottom: height < 0 ? currentY * 20 : previousY * 20,
                  // left: width < 0 ? currentX * 20 : previousX * 20,
                  // current coordinate multiply 20, each square is 20x20px
                  bottom: currentY * 20,
                  left: currentX * 20,
                }}
              >
                <i className='fas fa-map-marker-alt' />
              </div>
            )
          })}
          <div className='start-position'>
            <i className='fas fa-map-pin' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Labyrinth
