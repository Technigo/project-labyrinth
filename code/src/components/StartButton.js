import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchStart } from "reducers/game";
import { ui } from 'reducers/ui'

export const StartButton = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  //const [started, setStarted] = useState(false);
  const started = useSelector(state => state.ui.isStarted)

  return (
    <>
      {!started && (
        <>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              dispatch(fetchStart(value));
              //setStarted(true);
            }}
          >
            Start Game
          </button>
        </>
      )}
    </>
  );
};
