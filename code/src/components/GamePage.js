import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DuckContainer } from 'styled-components/GlobalStyles';
import { generateMoves } from 'reducer/game';
import { DucklingHeader } from './DucklingHeader';

export const GamePage = () => {
  const { description, actions } = useSelector((store) => store.game.currentLocation)
  const dispatch = useDispatch();

  const username = useSelector((store) => store.game.username);

  return (
    <section>
      <DuckContainer>
        <DucklingHeader />
        <p>Hello: {username}</p>
      </DuckContainer>
      <div>
        <p>
            DESCRIPTION: {description}
        </p>
      </div>
      <div>
        {actions.length > 0
        && actions.map((action) => (
          <>
            <div key={action.direction}>
              <p>{action.description}</p>
            </div>
            <button
              type="button"
              onClick={() => dispatch(generateMoves(action.direction))}>{action.direction}
            </button>
          </>
        ))}
      </div>
    </section>
  )
}
