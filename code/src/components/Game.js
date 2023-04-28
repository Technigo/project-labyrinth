/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameProgress } from 'reducers/labyrinth';
import { Loader } from './Loader';
import { Restart } from './Restart';
import { GameWrapper, ActionWrapper, SingleActionWrapper, ActionTop, CurrentRoomDescriptionText, NextRoomDescriptionText } from './GameCSS';
import { Btn } from './StartScreenCSS';
import { EnvironmentIMG } from './EnvironmentIMG';

const Game = () => {
  const labyrinth = useSelector((store) => store.labyrinth)
  const resp = useSelector((store) => store.labyrinth.response)
  const isLoading = useSelector((state) => state.labyrinth.isLoading)
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loader />
  } else {
    return (
      <GameWrapper>
        <EnvironmentIMG coordinates={resp.coordinates} />
        <CurrentRoomDescriptionText>{labyrinth.response.description}</CurrentRoomDescriptionText>
        <ActionWrapper>
          {labyrinth.response.actions && labyrinth.response.actions.map((userAction) =>
            <SingleActionWrapper key={userAction.type && userAction.direction}>
              <ActionTop>
                <NextRoomDescriptionText>{userAction.description}</NextRoomDescriptionText>
              </ActionTop>
              <Btn
                type="button"
                onClick={
                  () => dispatch(gameProgress(userAction.direction))
                }>
              Go {userAction.direction}
              </Btn>
            </SingleActionWrapper>)}
          <Restart />
        </ActionWrapper>
      </GameWrapper>)
  }
}
export default Game;
