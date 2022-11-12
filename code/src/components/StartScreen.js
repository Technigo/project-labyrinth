import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { questions, generateQuestions } from 'reducers/questions';

const StartScreen = () => {
  const [inputValueUserName, setInputValueUserName] = useState('');
  const dispatch = useDispatch();

  const userNameSubmit = (e) => {
    e.preventDefault();
    console.log(inputValueUserName);

    dispatch(questions.actions.setUserName(inputValueUserName));
    dispatch(generateQuestions());
  };

  return (
    <div className="main-container">
      <h4>Enjoy the Game</h4>
      <form onSubmit={(e) => userNameSubmit(e)}>
        <label htmlFor="username-input">
          <input
            id="username-input"
            placeholder="Enter your Name..."
            type="text"
            value={inputValueUserName}
            onChange={(e) => setInputValueUserName(e.target.value)}
          />
        </label>
      </form>
      <div className="btn">
        <button
          className="StartButton"
          type="submit"
          onClick={userNameSubmit}
          disabled={inputValueUserName === ''}
        >
          Start !
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
