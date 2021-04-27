import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import game from '../reducers/game'

export const NameInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onUserNameSet = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUserName(value));
  };

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onUserNameSet}>Submit</button>
    </form>
  );
};
