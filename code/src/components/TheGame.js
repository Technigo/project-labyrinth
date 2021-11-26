import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "reducers/game";
import { game } from "reducers/game";
import styled from "styled-components";
import Brickwall from "../pictures/brickwall.jpg";

const GameCard = styled.div`
  background-image: url(${Brickwall});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 12px;
  padding: 10px;
  border-radius: 6px;

  p {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 20px;

    p {
      font-size: 20px;
    }

    article {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    article div {
      width: 50%;
    }
  }

  @media (min-width: 1024px) {
    width: 800px;
  }
`;

const TheGame = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );

  const gameStep = useSelector((store) => store.game.currentPosition);
  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction));
  };

  const AlternativesCard = ({ description, type, direction }) => (
    <div>
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        Go {direction}
      </button>
    </div>
  );

  return (
    <GameCard>
      <h2>{description}</h2>
      <p>
        <i>Your coordinates: {coordinates}</i>
      </p>
      <article>
        {gameStep?.actions?.length === 0 && <h3>Yay you made it out!</h3> && (
          <button onClick={() => dispatch(game.actions.restart())}>
            Lets go again!
          </button>
        )}
        {gameStep?.actions?.length > 0 &&
          actions.map((item) => (
            <AlternativesCard key={item.direction} {...item} />
          ))}
      </article>
    </GameCard>
  );
};

export default TheGame;
