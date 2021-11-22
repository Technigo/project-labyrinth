import React, { useState } from "react";
import { fetchGame, game } from "reducers/game";
import { useDispatch } from "react-redux";

export const StartPage = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onNameSubmit = (name) => {
    dispatch(game.actions.setUserName(name));
  };

  const onSetName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={onSetName} />

      <button
        onClick={() => {
          onNameSubmit(name);
          dispatch(fetchGame(name));
        }}
      />
    </div>
  );
};
