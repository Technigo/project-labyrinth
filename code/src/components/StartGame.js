import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Game, startGame } from 'reducers/Game';
import { Loading } from './Loading';
import { Button } from '../styles/Button';
import { StartScreenSection, GameSection, Form } from '../styles/Sections';
import './StartGame.css';

export const StartGame = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.game.loading);

  const onAddUsername = (event) => {
    event.preventDefault();
    dispatch(Game.actions.setUsername(inputValue));
    dispatch(startGame());
  };

  if (loading) {
    return <Loading />
  }
  return (
    <StartScreenSection>
      <GameSection>
        <p>From right to left, and to and fro,
        Caught in a labyrinth you go,
        And turn, and turn, and turn again,
        To solve the mystery, but in vain;
        </p>
        <p>
        Stand still, and breathe, and take from me
        A clue, that soon shall set you free!
        Not Ariadne, if you met her,
        Herself could serve you with a better.
        </p>
        <p>
        You enter d easily--find where--
        And make with ease your exit there!
          <br />
        by William Cowper
        </p>
        <Form
          className="UsernameForm"
          onSubmit={onAddUsername}>
          <label htmlFor="usernameForm" className="usernameForm">
            <input
              id="usernameForm"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              type="text"
              required
              placeholder="READY PLAYER 1"
              style={{
                background: 'transparent',
                padding: '20px 30px 20px 30px',
                font: 'Press Start 2P',
                border: '2px solid black',
                margin: '5px'
              }} />
          </label>
          <Button
            type="submit">
            Start Game!
          </Button>
        </Form>
      </GameSection>
    </StartScreenSection>
  )
}