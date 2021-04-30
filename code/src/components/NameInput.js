import React, { useState } from "react";
import { useDispatch } from "react-redux";

import game from "../reducers/game";

export const NameInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onUserNameSet = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUserName(value));
  };

  return (
    <div className="nes-container is-rounded is-dark">
      <h1>Welcome adventurer!</h1>
      <section className="icon-list">
        <i className="nes-bulbasaur"></i>
      </section>
      <form>
        <div className="nes-field">
          <label for="name_field">Tell us your name</label>
          <input
            type="text"
            id="name_field"
            className="nes-input is-dark"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button className="nes-btn is-primary" onClick={onUserNameSet}>
          OK
        </button>
      </form>
    </div>
  );
};
