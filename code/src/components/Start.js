import React, { useState } from "react";
// import { useDispatch } from "react-redux";

const Start = () => {
  const [inputValue, setInputValue] = useState("");
  // const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    // dispatch();
    setInputValue("");
  };

  return (
    <>
      <h1>Welcome to our labyrinth</h1>
      <label htmlFor="name">Enter your name to start the game</label>
      <form onSubmit={submitHandler}>
        <input
          id="name"
          type="text"
          value={inputValue}
          required
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Player name..."
        />
        <button type="submit" disabled={inputValue.length === 0}>
          Enter labyrinth
        </button>
      </form>
    </>
  );
};

export default Start;
