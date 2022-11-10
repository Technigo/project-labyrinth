import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DuckContainer } from 'styled-components/GlobalStyles';
import { generateMoves } from 'reducer/game';
import styled from 'styled-components';
import { DucklingHeader } from './DucklingHeader';
import { EndingPage } from './EndingPage';

export const GamePage = () => {
  const { description, actions } = useSelector((store) => store.game.currentLocation)
  const dispatch = useDispatch();

  const username = useSelector((store) => store.game.username);

  return (
    <section>
      <DuckContainer>
        <DucklingHeader />
        <HeaderText>
          {actions.length > 0 ? (
            <p>We don&apos;t have
          a lot of time. Hurry up, {username}!
            </p>
          ) : (<p>Thank you for your help, {username}. You&apos;re truly my saviour</p>)}
        </HeaderText>

      </DuckContainer>
      <div>
        <p>
          &quot;{description}&quot;
        </p>
      </div>
      <div>
        {actions.length > 0
        && actions.map((action) => (
          <div key={action.direction}>
            <p>{action.description}</p>
            <button
              type="button"
              onClick={() => dispatch(generateMoves(action.direction))}>{action.direction}
            </button>
          </div>
        ))}
        {actions.length === 0 && <EndingPage />}
      </div>
    </section>
  )
}

const HeaderText = styled.div`
margin: 0;
width: 100%;
`