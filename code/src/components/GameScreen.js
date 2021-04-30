import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import assets from '../assets/compass.png'
import { nextAction } from '../reducers/gameactions'

import Summary from './Summary'

const GameScreen = () => {
  const gameStart = useSelector(store => store.gameactions.gamestart)
  const loading = useSelector(store => store.gameactions.loading)

  const dispatch = useDispatch()

  return (
    <div className='gamescreen-container'>
      {loading &&
        <span className='image-container'>
          <img src={assets} alt='compass' />
        </span>
      }
      {!loading && (
        <div className='description-container'>
          <p className='fade-in'>{gameStart.description}</p>
          {gameStart.actions.map((action) => (
            <div key={action.description}>
              <p className='fade-in'>{action.description}</p>
              <button
                className='fade-in'
                onClick={() => dispatch(nextAction(action.direction))}
              >
                Go {action.direction}
              </button>
            </div>
          ))}
          {gameStart.coordinates === '1,3' && <Summary />}
        </div>
      )}
    </div>
  )
}

export default GameScreen
