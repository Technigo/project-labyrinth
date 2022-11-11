import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import game from 'reducers/game';
import { GameWrapper } from './styled/GameWrapper.styled';
import LoadingIndicator from './LoadingIndicator';
import Look from './Look';
import Move from './Move';

const GameScreen = () => {
  const [looking, setLooking] = useState(false);
  const dispatch = useDispatch();
  const response = useSelector((state) => state.game.response);

  const onRestartClick = () => {
    dispatch(game.actions.restart());
  };

  return (

    <GameWrapper>
      <div className="nes-container">
      
      <LoadingIndicator />
      <p>{response.description}</p>
      
      <Look response={response} setLooking={setLooking} />   
      {looking && <Move response={response} looking={looking} setLooking={setLooking} />}

      {response.coordinates === '1,3' && (
        <button type="button" className="nes-btn" onClick={() => onRestartClick()}>
          Restart Game
        </button>
      )}
      {/*<progress className="nes-progress is-succress" value={response.coordinates} max="20" />*/}
      
      </div>
    </GameWrapper>
  );
};

export default GameScreen;
