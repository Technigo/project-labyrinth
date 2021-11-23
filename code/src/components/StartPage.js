import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGame, game } from '../reducers/game';

const StartPage = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onNameSubmit = (name) => {
    dispatch(game.actions.setUserName(name));
    setName('');
  };

  const onSetName = (event) => {
    setName(event.target.value);
  };

  return (
    <section>
      <input type='text' value={name} onChange={onSetName} />

      <button
        onClick={() => {
          onNameSubmit(name);
          dispatch(fetchGame(name));
        }}
      >
        Start
      </button>
    </section>
  );
};

export default StartPage;
