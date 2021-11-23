import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGame, game } from '../reducers/game';

const StartPage = () => {
  const [name, setName] = useState('');
  // const newGame = useSelector((store) => store.game.gameObject);
  const dispatch = useDispatch();
  // console logen visar initial state som empty array från början, och när en klickar start-knappen så kommer svaret från APIn.
  // console.log(newGame);

  // använda useState för att spara userName, ihopkopplad med input value och onchange på rad 25-26
  // const [userName, setUserName] = useState('')

  // Tänker att onbuttonclick i rad 30-31 kan göras om här så att både användarnamnet sparas och spelet startas när en klickar
  // const onUsernameSet = (event) => {
  //   setUserName(event.target.value)
  // dispatch(fetchStartGame())
  //}

  // const onNewUserName = () => {
  //   dispatch(game.actions.setUserName(userName))
  //   userName('')
  // }

  const onNameSubmit = (name) => {
    dispatch(game.actions.setUserName(name));
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

      {/* <p>{userName}</p> */}

      {/* Här försökte jag displaya informationen som vi får tillbaka från APIn, men lyckades inte. */}
      {/* <p>{game.newGame.description}</p> */}
      {/* {newGame.actions.map((action) => (
        <button key={action.direction}>{action.direction}</button>
      ))} */}

      {/* {newGame.description.map((action) => {
        ;<p>{action.description}</p>
      })} */}

      {/* Detta funkar obv inte.. */}
      {/* <p>{newGame.description}</p>
      {newGame.gameArray.map((item, index) => (
        <p key={item.description}>{item.description}</p>
      ))} */}
    </section>
  );
};

export default StartPage;
