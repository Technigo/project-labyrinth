import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStartGame } from '../reducers/game';

const StartPage = () => {
  const newGame = useSelector((store) => store.game.startGame);
  const dispatch = useDispatch();
  // console logen visar initial state som empty array från början, och när en klickar start-knappen så kommer svaret från APIn.
  console.log(newGame);

  // använda useState för att spara userName, ihopkopplad med input value och onchange på rad 25-26
  //   const [userName, setUserName] = useState('')

  // Tänker att onbuttonclick i rad 30-31 kan göras om här så att både användarnamnet sparas och spelet startas när en klickar
  //   const onUsernameSet = () => {
  //     dispatch(game.actions.setUsername(username))
  //     dispatch(fetchStartGame());
  //   }

  return (
    <section>
      <input
        type='text'
        // value={username}
        // onChange={(event) => setUsername(event.target.value)}
      />

      <button
        onClick={() => {
          dispatch(fetchStartGame());
        }}
      >
        Start
      </button>

      {/* Här försökte jag displaya informationen som vi får tillbaka från APIn, men lyckades inte. */}
      {/* <p>{game.newGame.description}</p> */}
      {/* {newGame.actions.map((action) => (
        <button key={action.direction}>{action.direction}</button>
      ))} */}
    </section>
  );
};

export default StartPage;
