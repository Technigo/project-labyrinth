import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import img from "../assets/background-maze.jpeg"
//Reducer game
import { game } from "../reducers/game";
// Thunk startGame
import { startGame } from "../reducers/game";

// Styled components

const HeaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
`;

const Header = styled.header`
  width: 90%;
  background-color: rgba(255, 255, 255, 0.063);
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 500px;
  }
`;

const HeadingOneContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HeadingOne = styled.h1`
  margin: 40px 0;
  text-align: center;
  color: #fff;
  font-family: 'Trispace', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 300px;
`;

const Label = styled.label`
  color: #fff;
  margin-bottom: 10px;
  font-size: 1.3rem;
`;

const Input = styled.input`
  height: 25px;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const Button = styled.button`
  transition: all 0.3s ease;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  color: rgb(17, 101, 48);
  background-color: rgb(255, 204, 29);
  font-weight: bolder;
  border: none;
  font-size: 1.2rem;
  margin-top: 50px;
  margin-bottom: 30px;


  :hover {
    background-color: rgb(17, 101, 48);
    color: rgb(255, 204, 29);
    transform: scale(1.1, 1.1);
  }
`;

export const Start = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startGame());
  };

  return (
    <HeaderContainer>
      <Header>
        <HeadingOneContainer>
          <HeadingOne>Welcome to Labyrinth!</HeadingOne>
        </HeadingOneContainer>

        <Form onSubmit={handleSubmit}>
          <Label>Enter your name here:</Label>

          <Input
            type="text"
            required
            onChange={handleInputChange}
            placeholder={" Your name ..."}
          />
          <Button type="submit">Start game</Button>
        </Form>
      </Header>
    </HeaderContainer>
  );
};
