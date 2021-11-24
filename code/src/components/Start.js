import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import img from "../images/maze.jpeg";
//Reducer game
import { game } from "../reducers/game";
// Thunk startGame
import { startGame } from "../reducers/game";

// Styled components
const HeaderContainer = styled.div`
  border: 5px solid blue;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  background: pink;
`;

const Header = styled.header`
  border: 2px solid red;
  width: 80%;
  /* margin:0 auto; */
`;

const HeadingOne = styled.h1`
  width: 200px;
  margin: 20px auto;
  color: blue;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 200px;
`;

const Label = styled.label`
  color: pink;
  margin-bottom: 5px;
`;
const Input = styled.input`
  height: 25px;
  margin-bottom: 5px;
`;
const Button = styled.button`
  margin-bottom: 20px;
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
        <HeadingOne>Welcome to Labyrinth!</HeadingOne>

        <Form onSubmit={handleSubmit}>
          <Label>Enter your name here:</Label>

          <Input
            type="text"
            required
            onChange={handleInputChange}
            placeholder={"Write your name here ..."}
          />
          <Button type="submit">Start game</Button>
        </Form>
      </Header>
    </HeaderContainer>
  );
};
