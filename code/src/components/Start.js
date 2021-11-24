import React, { useState } from "react";
import { useDispatch } from "@reduxjs/toolkit";

const Start = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  //   här dispatchar vi reducern där vi får användarnamnet och vi "callar" på den funktionen med onClick
  const onNameSubmit = name => {
    dispatch(start.actions.setUserName(name));
    setName("");
  };
  //  här sätter vi användarnamnet som hamnar i inputen
  const onSetUsername = event => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="Player.."
        onChange={onSetUsername}
      />
      <button
        onClick={() => {
          onNameSubmit(username);
          dispatch(fetchStart(username));
        }}
      >
        Start game
      </button>
    </div>
  );
};

export default Start;
