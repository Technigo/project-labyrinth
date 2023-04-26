import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveForward } from 'reducers/maze';
import { Loading } from 'components/Loading';
import { Button } from './global-style/Button';
import { Wrapper } from './global-style/Wrapper';

export const MazeActions = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  const actions = useSelector((store) => store.maze.actions);
  const description = useSelector((store) => store.maze.description);
  const dispatch = useDispatch();

  const handleDirectionButton = (moveDirection) => {
    dispatch(moveForward(moveDirection))
  };

  return (
    <>
      {isLoading && (<Loading />)}
      {!isLoading && (
        <Wrapper>
          <p>{description}</p>
          {actions.map((eachAction) => {
            return (
              <div key={eachAction.description}>
                <p>{eachAction.description}</p>
                <Button type="button" onClick={() => handleDirectionButton(eachAction.direction)}>
                  {eachAction.direction}
                </Button>
              </div>
            )
          })}
        </Wrapper>
      )}
    </>
  )
};