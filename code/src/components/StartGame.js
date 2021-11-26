import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { game, fetchStartGame } from "../reducers/game";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content; center; 
  text-align: center; 
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  background-color: rgb(171, 236, 243);
  margin-top: 60px;
  margin-right: 10px;
  margin-left: 10px;
  padding-top: 15px;
  padding-right: 10px;
  padding-bottom: 15px;
  padding-left: 10px;

  @media (min-width: 768px){
  margin-right: 50px;
  margin-left: 50px;
  padding-bottom: 25px;
  }
  @media (min-width: 1024px){
    margin-right: 100px;
    margin-left: 100px;
  }
`;

const StartTitle = styled.h1`
  font-size: 1em;
  @media (min-width: 768px) {
    font-size: 1.5em;
  }
  @media (min-width: 1024px) {
    font-size: 2em;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartText = styled.p`
  font-family: "Lobster Two", cursive;
  font-size: 1.5em;
  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const TextInput = styled.input`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  padding: 10px;
  margin: 10px;
`;

const SubmitButton = styled.button`
width: fit-content;
padding 10px;
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  font-family: "Press Start 2P", cursive;

  @media (min-width: 1024px){
    &:hover {
      background-color: rgb(195, 168, 235)
    }
  }
`;

export const StartGame = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchStartGame());
  };

  return (
    <Container>
      <StartTitle>Are you ready for an adventure?</StartTitle>

      <FormWrapper onSubmit={handleSubmit}>
        <LabelWrapper>
          <StartText>Please enter your name:</StartText>
          <TextInput type="text" required onChange={handleInputChange} />
          <SubmitButton type="submit">START GAME</SubmitButton>
        </LabelWrapper>
      </FormWrapper>
    </Container>
  );
};
