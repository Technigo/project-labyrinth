/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { questions } from 'reducers/questions';
import { gameProgress } from 'reducers/questions';

const GameScreen = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.questions.username);
  const { gameQuestion, isLoading } = useSelector((store) => store.questions);
  if (isLoading) {
    return 'Loading...';
  }
  console.log('description', gameQuestion.description);
  console.log('actions', gameQuestion.actions.length);

  // const restartGame = () => {
  //   dispatch(questions.actions.restart());
  // };

  // const onClickStartGame = (e) => {
  //   e.preventDefault();
  //   dispatch(questions.actions.userName);
  //   dispatch(generateQuestions);
  // };

  const onClickStartGame = (direction, type) => {
    console.log('direction on progress', direction);
    dispatch(gameProgress(direction, type));
  };

  return (
    // <section onSubmit={(e) => onClickStartGame(e)}>
    <section>
      <div className="wrapper">
        {gameQuestion.actions.length > 0 ? (
          <h2>Let start the Game {userName}! </h2>
        ) : (
          <h2>Well Done {userName}</h2>
        )}

        <div>
          <h2>{gameQuestion.description}</h2>
        </div>

        <section className="options-section">
          {gameQuestion.actions.map((option) => (
            <div key={option.description}>
              <p>➜&nbsp;{option.description}</p>
              <button
                className="btn-success"
                onClick={() => onClickStartGame(option.direction, option.type)}
              >
                Go Forward
                {option.type}&nbsp;
                {option.direction}
              </button>
            </div>
          ))}
        </section>
        {/* Restart Game */}
        
          {/* <div className="button-container">
            <button
              className="nes-btn is-primary"
              onClick={() => restartGame()}
            >
              Restart
            </button>
          </div> */}
        
      </div>
    </section>
  );
};

export default GameScreen;
