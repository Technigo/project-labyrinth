import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { questions, generateQuestion } from 'reducers/questions';

export const StartScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onUserSet = () => {
    console.log(inputValue);
    dispatch(questions.actions.setUsername(inputValue));
    dispatch(generateQuestion());
  };

  return (
    <div className="nes-field">
      <p className="nes-text">Welcome, please enter your username</p>
      <input
        type="text"
        id="name_field"
        className="nes-input is-dark"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <div className="button-container">
        <button
          className="nes-btn is-primary"
          onClick={onUserSet}
          type="submit"
          disabled={inputValue === ''}>
          Start!
        </button>
      </div>
    </div>
  );
};
