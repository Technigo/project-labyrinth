import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchMove } from '../reducers/directions'

const GameScreen = () => {
  const step = useSelector(store => store.directions.step)
  console.log(step)

  const dispatch = useDispatch()

  const onBtnClick = (type, direction) => {
    dispatch(fetchMove(type, direction))
  }

  return (
    <section>
      <div>
        <h4>{step.coordinates}</h4>
        <h3>{step.description}</h3>
      </div>
      {step.actions.map((action) => (
        <div key={action.description}>
          <p>{action.description}</p>
          <button
            onClick={() => onBtnClick(action.type, action.direction)}
          >
            {action.type}
            {action.direction}
          </button>
        </div>
      )

      )}
    </section>
  )
}

export default GameScreen