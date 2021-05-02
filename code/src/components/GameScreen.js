import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { continueGame } from '../reducers/games'


const GameScreen = () => {
  const actions = useSelector(store => store.games.actions)
  const dispatch = useDispatch()

  const onButtonclick = (item) => {
    dispatch(continueGame(item))
    console.log(item)
  }

  console.log(actions)
  return (
    <section className='game-on'>
      <div className='head-description'>
        <h2>{actions.description}</h2> 
      </div> 
      <section className='direction-wrapper'>
            {actions.actions.map(item => (
        <>
          <div className='btn-direction'>
            <p>{item.description}</p>
            <button className='btn'onClick={() => onButtonclick(item)}>{item.direction}</button>
          </div>
        </>
          ))}
      </section>
    </section>
  )
}

export default GameScreen