import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateQuestion } from 'reducers/questions';

export const GameScreen = () => {
  const username = useSelector((store) => store.questions.username);
  const gameQuestion = useSelector((store) => store.questions.gameQuestion);
  console.log(gameQuestion, 'hej');

  const dispatch = useDispatch();

  const onQuestionGenerate = (direction) => {
    dispatch(generateQuestion(direction));
  };

  return (
    <div>
      <div>
        <i className="nes-octocat animate"></i>
        <h2>Let´s play {username}!</h2>
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
      </div>
    </div>
  );
};
