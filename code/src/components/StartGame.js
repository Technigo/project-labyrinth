import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame, gamestate} from "reducers/gamestate";

export const StartGame = () => {
  const game = useSelector((store) => store.gamestate.gameStatus);
  const dispatch = useDispatch();

	const test = gamestate;
	console.log(test)



	console.log(game)

  return (
    <>
      <h1>hello</h1>
      <button
        onClick={() => {
          dispatch(fetchGame());
        }}
      >
        FETCH 
      </button>
			{/*{game.map(item => console.log(item))}*/}
      {/*{game.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}*/}
    </>
  );
};