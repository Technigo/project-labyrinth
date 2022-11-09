import React from 'react';
import { useSelector } from 'react-redux';
import { DuckContainer } from 'styled-components/GlobalStyles';
import { /* game, */ generateMoves } from 'reducer/game';
import { DucklingHeader } from './DucklingHeader';

export const GamePage = () => {
  const description = useSelector((store) => store.game.location);
  console.log(description)
  const username = useSelector((store) => store.game.username);

  // const dispatch = useDispatch();

  // const restart = () => {
  //   dispatch(game.actions.restart());
  // };

  // const onGenerateMoves = (direction) => {
  //   dispatch(generateMoves(direction))
  // }

  console.log(generateMoves)

  return (
    <section>
      <DuckContainer>
        <DucklingHeader />
        {/* console.log(G A: {generateMoves.actions})
        {generateMoves.actions.length > 0 ? (<p>hi {username}</p>
        ) : (
          <p>
            good job {username}
          </p>
        )} */}
        <p>Hello: {username}</p>
      </DuckContainer>
      <div>
        <p key={description.description}>
            DESCRIPTION: {description.description}
        </p>
      </div>
      {/* <div>
        {generateMoves.actions.map((option) => (
          <div key={option.description}>
            <p>{option.description}</p>
            <div>
              <button
                type="button"
                onClick={() => onGenerateMoves(option.direction)}>{option.type} +
                {option.direction}
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  )
}