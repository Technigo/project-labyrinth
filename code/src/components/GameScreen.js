import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { questions, generateQuestion } from 'reducers/questions';

export const GameScreen = () => {
  const username = useSelector((store) => store.questions.username);
  const gameQuestion = useSelector((store) => store.questions.gameQuestion);
  console.log(gameQuestion.actions.length, 'hej');

  const dispatch = useDispatch();

  const restart = () => {
    dispatch(questions.actions.restart());
  };

  const onQuestionGenerate = (direction) => {
    dispatch(generateQuestion(direction));
  };

  return (
    <div>
      <div>
        <i className="nes-octocat animate"></i>
        {gameQuestion.actions.length > 0 ? (
          <h2>Let´s go {username}!</h2>
        ) : (
          <h2>Well done {username}!</h2>
        )}
        <div className="nes-balloon from-left">
          <h3>{gameQuestion.description}</h3>
        </div>
        <section className="options-section">
          {gameQuestion.actions.map((option) => (
            <div className="nes-text is-primary" key={option.description}>
              <p>➜&nbsp;{option.description}</p>
              <div className="button-container">
                <button
                  className="nes-btn is-success"
                  onClick={() => onQuestionGenerate(option.direction)}>
                  {option.type}&nbsp;
                  {option.direction}
                </button>
              </div>
            </div>
          ))}
        </section>
        {gameQuestion.actions.length === 0 && (
          <div className="button-container">
            <button className="nes-btn is-primary" onClick={() => restart()}>
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
