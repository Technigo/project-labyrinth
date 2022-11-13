import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import game from 'reducers/game';
import LoadingIndicator from './LoadingIndicator';
import Move from './Move';
import { Avatar } from './styled/Avatar';
import { InnerWrapper, BoxContainer } from './styled/containers';

const GameScreen = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.game.response);

  const onRestartClick = () => {
    dispatch(game.actions.restart());
  };

  return (
    <>
      <InnerWrapper>
        <div className="profileContainer">
          <Avatar src="/assets/avatarCrop.png" alt="avatar" />
        </div>
        <BoxContainer>
          {response.description && (
            <div className="nes-container is-rounded">
              <p>{response.description}</p>
            </div>
          )}

          <LoadingIndicator />

          <Move response={response} />
        </BoxContainer>
      </InnerWrapper>

      {response.coordinates === '1,3' && (
        <button
          type="button"
          className="nes-btn is-success"
          onClick={() => onRestartClick()}
        >
          Restart Game
        </button>
      )}
    </>
  );
};

export default GameScreen;
