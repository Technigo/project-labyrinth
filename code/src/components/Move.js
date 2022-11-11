import React from 'react';
import game, { gameProgress } from "reducers/game";
import { useDispatch } from "react-redux";

const Move = ({ response, looking, setLooking }) => {
    const dispatch = useDispatch();
  
    const onDirectionClick = (direction) => {
      dispatch(game.actions.setDirection(direction));
      dispatch(gameProgress('action'));
      setLooking(false);
    };

    return (
      <>
      {response.actions?.map((action) => {
        return (
          <><p>{ action.description }</p><label>
            <button
              type="button"
              className="nes-btn"
              name="answer"
              onClick={ () => onDirectionClick(action.direction) }>
              Go { action.direction }
            </button>
          </label></>
        )
      })}
      </>
    );
  };

  export default Move;