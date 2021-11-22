import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { quest } from "reducers/quest";

export const LandingPage = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const createHeroName = (e) => {
    if (name === "") {
      setError(true);
    }
    e.preventDefault(e);
    dispatch(quest.actions.setPlayersName(name));
  };

  return (
    <form onSubmit={(e) => createHeroName(e)}>
      <h1>Start your adventure!</h1>
      <h2>Tell us your name, Hero!</h2>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      {error && <div>please fill in your hero name</div>}
    </form>
  );
};
