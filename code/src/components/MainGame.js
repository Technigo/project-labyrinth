import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameSteps } from '../reducers/game';

const MainGame = () => {
  const gameObject = useSelector((store) => store.game.gameObject);
  const username = useSelector((store) => store.game.username);
  console.log(gameObject);

  const dispatch = useDispatch();

  return (
    <div>
      {/* Tänker att p-tagen med username dyker upp när spelet startas, och i samband med det göms input field */}
      <p>
        User:
        {username}
      </p>
      <h1>{gameObject.description}</h1>
      <p>{gameObject.coordinates}</p>
      {gameObject.actions.map((action) => (
        <div key={action.direction}>
          <p>{action.description}</p>
          {/* med knappens dispatch action skickar vi med informtion om vilken direction spelaren väljer.
          Informationen finns också med som param(eller är det ett props?) i fetchGameSteps-thunken i game.js) */}
          <button
            onClick={() =>
              dispatch(fetchGameSteps({ direction: action.direction }))
            }
          >
            Go {action.direction}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainGame;
