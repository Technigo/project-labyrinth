import React from 'react';
import { useSelector/* , useDispatch  */ } from 'react-redux';
import { DuckContainer } from 'styled-components/GlobalStyles';
import { /* game,  generateMoves */ } from 'reducer/game';
import { DucklingHeader } from './DucklingHeader';
import { UserMoves } from './UserMoves';

export const GamePage = () => {
  const description = useSelector((store) => store.game.location);

  const username = useSelector((store) => store.game.username);

  const actions = useSelector((store) => store.game.location.actions);

  console.log(actions);

  return (
    <section>
      <DuckContainer>
        <DucklingHeader />
        <p>Hello: {username}</p>
      </DuckContainer>
      <div>
        <p key={description.description}>
            DESCRIPTION: {description.description}
        </p>
      </div>
      <div>
        {actions.map((action) => (
          <UserMoves key={action} action={action} />
        ))}
      </div>
    </section>
  )
}
