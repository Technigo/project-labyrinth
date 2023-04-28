/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameProgress } from 'reducers/labyrinth';
import { Loader } from './Loader';
import { Restart } from './Restart';
import { GameWrapper, ActionWrapper, ActionTop, ActionBottom, EnvironmentIMG } from './GameCSS';
import { Btn } from './StartScreenCSS';

const Game = () => {
  const labyrinth = useSelector((store) => store.labyrinth)
  const resp = useSelector((store) => store.labyrinth.response)
  const isLoading = useSelector((state) => state.labyrinth.isLoading)
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loader />
  } else if (resp.coordinates === '0,0') {
    return <Restart />
  } else {
    return (
      <GameWrapper>
        <EnvironmentIMG labyrinth={labyrinth} />
        <p>{labyrinth.response.description}</p>
        {labyrinth.response.actions && labyrinth.response.actions.map((userAction) =>
          <ActionWrapper key={userAction.type && userAction.direction}>
            <ActionTop>
              <p>{userAction.type}:{userAction.direction}</p>
              <p>{userAction.description}</p>
            </ActionTop>
            <ActionBottom>
              <Btn
                type="button"
                onClick={
                  () => dispatch(gameProgress(userAction.direction))
                }>
              Go {userAction.direction}
              </Btn>
            </ActionBottom>
          </ActionWrapper>)}
        <Restart />
      </GameWrapper>)
  }
}
export default Game;
