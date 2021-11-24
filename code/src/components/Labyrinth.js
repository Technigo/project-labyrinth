import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { continueGame } from 'reducers/start';
import { End } from './End';

export const Labyrinth = () => {
  const dispatch = useDispatch();

  const coordinates = useSelector(store => store.start.coordinates);
  const gameDescription = useSelector(store => store.start.description);
  const gameActions = useSelector(store => store.start.actions);
  const username = useSelector(store => store.start.username);

  // const setBgImage = () => {
  //   let bg = 'red';
  //   switch (coordinates) {
  //     case '0,0':
  //       bg = 'blue';
  //       break;
  //     case '1,0':
  //       bg = 'yellow';
  //       break;
  //     case '1,1':
  //       bg = 'blue';
  //       break;
  //     case '0,1':
  //       bg = 'red';
  //       break;
  //     case '0,2':
  //       bg = 'orange';
  //       break;
  //     case '0,3':
  //       bg = 'blue';
  //       break;
  //     case '1,3':
  //       bg = 'green';
  //       break;
  //     default:
  //       bg = `yellow`;
  //   }
  // };

  const colorDictionary = {
    '0,0': 'url(https://i.postimg.cc/zfkqh53b/url0-1.jpg)',
    '1,0': 'url(https://i.postimg.cc/4yxvGJHz/url0-2.jpg)',
    '1,1': 'url(https://i.postimg.cc/4yxvGJHz/url0-2.jpg)',
    '0,1': 'url(https://i.postimg.cc/PJ0C7hWf/url0-3.jpg)',
    '0,2': 'url(https://i.postimg.cc/FRskdTFv/url1-1.jpg)',
    '0,3': 'url(https://i.postimg.cc/R0TnZkBG/857152.jpg)',
    '1,3': 'url(https://i.postimg.cc/SsT2WcjM/280236.jpg)',
  };

  const onMove = direction => {
    dispatch(continueGame(username, direction));
  };

  console.log(coordinates);
  return (
    <>
      {coordinates === '1,3' && <End gameDescription={gameDescription} />}
      {username && (
        <div
          style={{
            backgroundImage: colorDictionary[coordinates],
          }}
        >
          <div>
            <div>
              <h3>{gameDescription}</h3>
              <div>
                {gameActions.map((choice, index) => (
                  <div key={index}>
                    <h4>{choice.description}</h4>
                    <button onClick={() => onMove(choice.direction)}>
                      Go {choice.direction}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
