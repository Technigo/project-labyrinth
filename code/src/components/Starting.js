import React from 'react';
import { useDispatch } from 'react-redux';
import { Labyrinth } from './Labyrinth';

import { startGameThunk } from 'reducers/labyrinthSlice';

export const Starting = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    const handleNameInput = (event) => {
		setUsername(event.target.value);
	};

    const start = ({ description, type, direction}) => {
		dispatch(startGameThunk(username));
		dispatch(labyrinthSlice.actions.setUserName(username));
		setBeginning(false);
	};

  return (
    <>
    <h1>Welcome, do you want to enter our Labyrinth?</h1>
      <form onSubmit={() => start()}>
        <input
          required
          onChange={(event) => handleNameInput(event)}
          value={username}
          type="text"
          placeholder="Write your name here.."
        ></input>
        <button disabled={username === ''} type="submit" onClick={() => start()}>
          Enter name
        </button>
      </form>
    </>
  );
};
