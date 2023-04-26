import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateMoves } from 'reducers/game'
// import styled from 'styled-components'

const GameBoard = () => {
  const { description, actions } = useSelector((store) => store.game.currentLocation)
  const dispatch = useDispatch()
  const username = useSelector((store) => store.game.username)

  return (
    <section>
      <div>
        {actions.length > 0 ? (
          <h1>
          Let&apos;s go {username}!
          </h1>
        ) : (<p>Thank you for your help, {username}! </p>)}
      </div>
      <div>
        <p> &quot;{description}&quot; </p>
        {actions.length > 0 && <p>Choose your next step: </p>}
      </div>
      <div>
        {actions.length > 0
        && actions.map((action) => (
          <div key={action.direction}>
            <p>{action.description} </p>
            <button
              type="button"
              onClick={() => dispatch(generateMoves(action.direction))}>
              {action.direction}
            </button>
          </div>

        ))}
        {/* {actions.length === 0 && <EndPage/>} */}
      </div>
    </section>
  )
}

export default GameBoard;