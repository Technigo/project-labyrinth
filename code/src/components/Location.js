/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { maze } from 'reducers/maze'
import { MakeMove } from './MakeMove'
import { FinalStep } from './FinalStep'
import { Loading } from './Loading'

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
    <container>
      {currentLocation.isLoading ? <Loading />
        : <div>
          {currentLocation.description}
          {currentLocation.coordinates !== '1,3'
            ? <p>Make a choice:</p>
            : <FinalStep />}
          {actionDirections}
        </div>}
    </container>
  )
}

export default Location