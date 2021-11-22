import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame } from "reducers/gamestate";

export const StartGame = () => {
  const description = useSelector((state) => state.gamestate.gameStatus.description);
	const actions = useSelector((state) => state.gamestate.gameStatus.actions)
  const dispatch = useDispatch();

	// for actions to show need to do another fetch for actions :) 

	console.log(actions)

  return (
    <>

      <button
        onClick={() => {
          dispatch(fetchGame());
        }}
      >
        FETCH 
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