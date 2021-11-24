import React from "react";
import { useDispatch } from "react-redux";
import game from "../reducers/game";
import { fetchGame } from "../reducers/game";

import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.h1`
  text-align: center;
`;

//Start page where the user will input their username
const StartPage = () => {
  const dispatch = useDispatch();

  // A function that stores the users input name on submit and dispatches it to the store
  const handleInputChange = (event) => {
    dispatch(game.actions.setUserName(event.target.value));
  };

  // A function that prevents the automatic submit
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchGame());
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Wrapper>
        <label>
          <h1> Type your username! </h1>
        </label>
        <div>
          <input type="text" required onChange={handleInputChange} />
          <button type="submit"> Send </button>
        </div>
      </Wrapper>
    </FormContainer>
  );
};

export default StartPage;
