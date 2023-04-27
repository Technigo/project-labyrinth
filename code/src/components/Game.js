import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameProgress } from 'reducers/labyrinth';
import { Loader } from './Loader';
import { GameWrapper, ActionWrapper, EnvironmentIMG } from './GameCSS';
import { Btn } from './StartScreenCSS';

const Game = () => {
  const labyrinth = useSelector((store) => store.labyrinth);
  const isLoading = useSelector((state) => state.labyrinth.isLoading);
  const dispatch = useDispatch();
  const [showActions, setShowActions] = useState(false);
  const [environmentIMG, setEnvironmentIMG] = useState('');

  const IMGrender = () => {
    // if coordinates === this or that then render this img
  }

  useEffect(() => {
    if (!showActions) {
      setTimeout(() => {
        setShowActions(true);
      }, 1300);
    }
  }, [showActions]);

  const handleButtonClick = () => {
    setShowActions(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <GameWrapper>
      <EnvironmentIMG src={environmentIMG} />
      <p>{labyrinth.response.description}</p>
      {showActions
        && labyrinth.response.actions
        && labyrinth.response.actions.map((userAction) => (
          <ActionWrapper key={userAction.type && userAction.direction}>
            <p>{userAction.description}</p>
            <Btn
              type="button"
              onClick={() => {
                dispatch(gameProgress(userAction.direction));
                handleButtonClick();
              }}>
              Go {userAction.direction}
            </Btn>
          </ActionWrapper>
        ))}
    </GameWrapper>
  );
};

export default Game;
