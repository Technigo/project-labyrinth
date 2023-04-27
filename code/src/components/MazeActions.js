import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveForward } from 'reducers/maze';
import { userhistory } from 'reducers/userhistory';
import { Loading } from 'components/Loading';
import { Button } from './global-style/Button';
import { Wrapper } from './global-style/Wrapper';
import { UserHistory } from './UserHistory';

export const MazeActions = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  const actions = useSelector((store) => store.maze.actions);
  const description = useSelector((store) => store.maze.description);
  // const coordinates = useSelector((store) => store.maze.coordinates)
  const dispatch = useDispatch();

  const handleDirectionButton = (moveDirection) => {
    // const nextStep = {
    //   id: Date.now(),
    //   direction: moveDirection,
    //   movedFrom: coordinates
    // }

    dispatch(moveForward(moveDirection))
    dispatch(userhistory.actions.addChoice(moveDirection))
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
          <UserHistory />
        </Wrapper>
      )}
    </>
  )
};