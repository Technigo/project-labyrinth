import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGameInstructions } from 'reducers/gamestate';


export const StartPage = () => {
    const StartPage = useSelector((store) => state.gamestate.username);
    const dispatch = useDispatch();

    return (
        <>
          <h1>hello</h1>
          <button
            onClick={() => {
              dispatch(fetchGameInstructions());
            }}
          >
            FETCH COINS
          </button>
          {coins.map((item) => (
            <p key={item.name}>{item.name}</p>
          ))}
        </>
      );
    };
    
  