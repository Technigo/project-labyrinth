import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame } from "reducers/gamestate";

export const StartGame = () => {
  const [userName, setUserName] = useState('')
  const description = useSelector((state) => state.gamestate.gameStatus.description);
	const actions = useSelector((state) => state.gamestate.gameStatus.actions);
  const loading = useSelector((state) => state.gamestate.loading);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="inline_field"></label>
        <input 
          required
          type="text" 
          placeholder="enter username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          />
      <button type='submit'>
        Start game
      </button>
			<p>Description: {description}</p>
			<p>Actions:  </p>
			
			{/*{game.map(item => console.log(item))}*/}
      {/*{game.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}*/}
    </>
  );
};