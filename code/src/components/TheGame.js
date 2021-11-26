import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "reducers/game";
import { game } from "reducers/game";
import Archway from "pictures/archway.jpg";
import Brickwall from "pictures/brickwall.jpg";
import Bridge from "pictures/bridge.jpg";
import EmptyRoom from "pictures/emptyroom.jpg";
import Gizmoz from "pictures/gizmoz.jpg";
import Labyrinth from "pictures/labyrinth.jpg";
import LastPic from "pictures/lastpic.jpg";
import Table from "pictures/table.jpg";

const GameCard = styled.div`
  background-position: center;
  background-size: cover;
  object-fit: cover;
  object-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    background: rgba(0, 0, 0, 0.5);
    width: 80vw;
    text-align: center;
    padding: 10px 10px 30px 10px;
  }

  p {
    font-size: 14px;
  }

  button {
    width: 100px;
    padding: 5px;
    margin-top: 30px;
    border: 1px solid white;
    font-family: "Zen Kurenaido", sans-serif;
    background: #b87333;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: 20px;

    p {
      font-size: 20px;
    }

    main {
      width: 80vw;
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
    main {
      width: 800px;
    }
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

  const username = useSelector((store) => store.game.username);

  const backgroundImage = () => {
    let bg = "";
    switch (coordinates) {
      case "0,0":
        bg = Archway;
        break;
      case "0,1":
        bg = Gizmoz;
        break;
      case "0,2":
        bg = EmptyRoom;
        break;
      case "0,3":
        bg = Table;
        break;
      case "1,0":
        bg = Brickwall;
        break;
      case "1,1":
        bg = Bridge;
        break;
      case "1,3":
        bg = LastPic;
        break;
      default:
        bg = Labyrinth;
    }
    return bg;
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
    <GameCard
      coordinates={coordinates}
      style={{ backgroundImage: `url(${backgroundImage()})` }}
    >
      <main>
        <h2>{description}</h2>
        <p>
          <i>Your coordinates: {coordinates}</i>
        </p>
        <article>
          {gameStep?.actions?.length === 0 && (
            <div>
              <h4>Congrats {username}, you made your way out!</h4>
              <button onClick={() => dispatch(game.actions.restart())}>
                Lets go again!
              </button>
            </div>
          )}
          {gameStep?.actions?.length > 0 &&
            actions.map((item) => (
              <AlternativesCard key={item.direction} {...item} />
            ))}
        </article>
      </main>
    </GameCard>
  );
};

export default TheGame;
