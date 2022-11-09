import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import questions from '../reducers/questions';

const StartScreen = () => {
  const [inputValueUserName, setInputValueUserName] = useState('');
  const dispatch = useDispatch();
  console.log(inputValueUserName)

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(questions.actions.setUserName(inputValueUserName));
  };

  return (
    <div className="startScreenContainer">
      <h4>Enjoy the Game</h4>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <label htmlFor="username-input">
          Enter your Name:
          <input
            id="username-input"
            placeholder="Name..."
            type="text"
            value={inputValueUserName}
            onChange={
              (e) => setInputValueUserName(e.target.value)
              // ;setNewUsername(e.target.value)
            }
          />
        </label>
      </form>
      <div>
        <button
          className="StartButton"
          type="submit"
          onClick={onFormSubmit}
          disabled={inputValueUserName === ''}
        >
          Start!
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
