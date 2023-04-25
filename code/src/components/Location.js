import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { maze } from 'reducers/maze';
import { MakeMove } from './MakeMove';

const Location = () => {
  const currentLocation = useSelector((store) => store.maze)
  const dispatch = useDispatch()

  const actionDirections = currentLocation.actions.map((action) => {
    const chooseDirection = (direction) => {
      dispatch(maze.actions.setDirection(direction))
      dispatch(MakeMove())
    }
    return (
      <div key={action.description}>
        <p>{action.description}</p>
        <button
          value={action.direction}
          type="button"
          onClick={((event) => chooseDirection(event.target.value))}>
          {action.direction}
        </button>
      </div>
    )
  })
  return (
    <div>
      {actionDirections}
    </div>
  )
}

export default Location