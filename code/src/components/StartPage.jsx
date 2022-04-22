import React from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import Mario from "../assets/Mario.png";

import { game, fetchStartGame } from "../reducers/game";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 7rem 0 3rem 0;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  color: #f7f7f7;
  background-color: #e52521dd;
`;

const WelcomeText = styled.h1`
  font-size: 1rem;
  letter-spacing: 2px;
  @media (min-width: 800px){
    font-size: 1.5rem;
  }
  @media (min-width: 1020px){
    font-size: 2rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const InputContainer = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 3px solid #43b047;
  @media (min-width: 800px){
    font-size: 0.75rem;
  }
  @media (min-width: 1020px){
    font-size: 1rem;
  }
`;

const Button = styled.button`
  width:100%;
  padding: 0.5rem;
  color: #f7f7f7;
  background-color: #049cd8;
  border: none;
  @media (min-width: 800px){
    font-size: 0.75rem;
  }
  @media (min-width: 1020px){
    font-size: 1rem;
  }
`;

const MarioImg = styled.img`
  width: 10rem;
  padding: 0.5rem;
`;

export const StartPage = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchStartGame());
  };

  return (
    <>
    <Container>
      <WelcomeContainer>
        <WelcomeText>Ready for an</WelcomeText>
        <WelcomeText>ADVENTURE?!</WelcomeText>
      </WelcomeContainer>
      <FormContainer onSubmit={handleSubmit}>
        <LabelContainer>
          <InputContainer placeholder="Enter your name" type="text" required onChange={handleInputChange} />
          <Button  type="submit">START GAME</Button>
        </LabelContainer>
      </FormContainer>
      <MarioImg src={Mario} alt="It's a me Mario"/>
    </Container>
    </>
  );
};