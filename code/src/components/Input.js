import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// --- reducer
import { game } from "reducers/game";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const FormContent = styled.form``;

const FormLabel = styled.label``;

const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 10px;
  background-color: #d9d0c1;
  border: none;
`;

const FormButton = styled.button`
  margin: 0 auto;
  border-radius: 5px;
  border: none;
  height: 25px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d0c1;
  font-family: "Caveat", cursive;
  font-size: 18px;
`;

export const Input = () => {
  const userName = useSelector((store) => store.game.username);
  console.log(`Username log: ${userName}`);

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    //dispatch the value to update the state
    dispatch(game.actions.setUsername(value));
    setValue("");
  };

  return (
    <FormContainer>
      <FormContent onSubmit={handleSubmit}>
        <FormLabel>
          <FormInput
            type="text"
            required
            value={value}
            placeholder="user name ..."
            autoComplete="off"
            onChange={(event) => setValue(event.target.value)}
          />
        </FormLabel>
        <FormButton type="submit">Enter</FormButton>
      </FormContent>
    </FormContainer>
  );
};
