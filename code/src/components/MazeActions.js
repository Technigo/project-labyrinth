import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveForward } from 'reducers/maze';
import { Button } from './Button';

export const MazeActions = () => {
  const actions = useSelector((store) => store.maze.actions)
  const description = useSelector((store) => store.maze.description)
  // const [moveDirection, setMoveDirection] = useState('')
  const dispatch = useDispatch()

  const handleDirectionButton = (moveDirection) => {
    dispatch(moveForward(moveDirection))
    console.log(moveDirection)
  }
  return (
    <>
      <p>{description}</p>
      {actions.map((eachAction) => {
        return (
          <div key={eachAction.description}>
            <p>{eachAction.description}</p>
            <Button type="button" onClick={() => handleDirectionButton(eachAction.direction)}>{eachAction.direction}</Button>
          </div>
        )
      })}
    </>
  )
};