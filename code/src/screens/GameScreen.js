import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGameData } from "reducers/gameSteps";

export const GameScreen = () => {
  const dispatch = useDispatch();
  const username = useSelector((store) => store.gameSteps.username);
  const game = useSelector((store) => store.gameSteps.gameStepList);
  console.log("game", game);

  useEffect(() => {
    dispatch(fetchGameData(`username`));
  }, [dispatch, username]);

  return (
    <section>
      <span>{game.description}</span>
    </section>
  );
};
