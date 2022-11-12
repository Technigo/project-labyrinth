import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const onClickStartGame = (type, direction) => {
    console.log('direction on progress', direction);
    dispatch(gameProgress(type, direction));
  };

  return (
    <section>
      <div className="wrapper">
        <div className="startText">
          {gameQuestion.actions.length > 0 ? (
            <h2 className="startTextUserName">
              Let´s start the Game {userName}!{' '}
            </h2>
          ) : (
            <h2>Well Done {userName}</h2>
          )}
        </div>
        <div>
          <h2>{gameQuestion.description}</h2>
        </div>

        <section className="options-section">
          {gameQuestion.actions.map((option) => (
            <div key={option.description}>
              <p>➜ &nbsp;{option.description}</p>
              <button
                className="StartButton"
                onClick={() => onClickStartGame(option.direction, option.type)}
              >
                {option.type}&nbsp;
                {option.direction}
              </button>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default GameScreen;
