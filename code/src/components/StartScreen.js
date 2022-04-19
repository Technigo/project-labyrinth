import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { questions } from 'reducers/questions';

export const StartScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onUserSet = () => {
    console.log(inputValue);
  };

  return (
    <div>
      <p>Welcome, please enter your username</p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={onUserSet} type="submit">
        Start!
      </button>
    </div>
  );
};
