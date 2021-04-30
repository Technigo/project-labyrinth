import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { fetchNext } from 'reducers/game';
import { StartPage } from 'components/StartPage';

export const GamePage = () => {
  const dispatch = useDispatch();

  const descriptionText = useSelector((store) => store.game.description);
  const coordinates = useSelector((store) => store.game.coordinates);
  const actionsObject = useSelector((store) => store.game.actions);
  const user = useSelector((store) => store.game.user);

  let content;

  if (user === null) {
    content = <StartPage />;
  } else {
    content = (
      <div>
        <h2 className='nes-container'>{descriptionText}</h2>
        <p className='coordinates'>Your coordinates are: {coordinates}</p>
        {actionsObject.map((action) => (
          <div key={action.direction}>
            <p>{action.description}</p>
            <button
              className='nes-btn is-primary'
              onClick={() => dispatch(fetchNext(action.direction, action.type))}
            >
              <h2> Go {action.direction}</h2>
            </button>
          </div>
        ))}
      </div>
    );
  }

  return <>{content}</>;
};
