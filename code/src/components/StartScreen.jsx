import React, { useState } from 'react';
// // import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { game, generateQuestion } from '../reducers/game';

export const StartScreen = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSetName = () => {
    dispatch(game.actions.setUserName(value))
    dispatch(generateQuestion(value))
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <input
        type="text"
        value={value}
        placeholder="ADD NAME"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        onClick={onSetName}
        >START
      </button>
    </div>
  )
}