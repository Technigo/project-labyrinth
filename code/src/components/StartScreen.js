import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import background from "../assets/background1.jpg";

import gameFetch, { startGame } from "reducers/gameFetch";

const Start = () => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const onNameSet = () => {
    dispatch(gameFetch.actions.setName(userName));
    dispatch(startGame(userName));
  };

  return (
    <Container>
      <Flex>
        <ContentWrapper>
          <Label htmlFor="name">Welcome! Please enter you name:</Label>
          <InputWrapper>
            <InputBox
              id="name"
              type="text"
              placeholder="Name"
              maxLength="20"
              value={userName}
              required
              onChange={(event) => setUserName(event.target.value)}
            ></InputBox>
          </InputWrapper>
          <Button onClick={onNameSet}>Start!</Button>
        </ContentWrapper>
      </Flex>
    </Container>
  );
};

export default Start;

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  background-position: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  height: 290px;
  border: 1px dashed;
  padding: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;

  @media (min-width: 768px) {
    max-width: 500px;
    height: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
  }
`;

const Label = styled.label`
  font-size: 18px;
  padding: 10px 0;
  text-align: center;
  font-weight: 800;
  font-family: 'Eagle Lake', cursive;
`;

const InputWrapper = styled.div`
  border-radius: 4px;
  background-color: #fff0e0;
  position: relative;
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  margin: 20px;
  :hover {
    background-color: #e4ae72;
  }
`;

const InputBox = styled.input`
  outline: none;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: inherit;
  box-sizing: border-box;
  padding: 2px 10px;
  ::placeholder {
    color: #8B0000;
    font-style: italic;
    
  }
  :focus {
    ::placeholder {
      opacity: 0;
    }
    padding: 2px 10px;
    background-color: #f5d0ab;
  }
`;

const Button = styled.button`
  margin: 10px auto;
  width: 170px;
  letter-spacing: 2px;
  border-radius: 8px;
  font-family: 'Eagle Lake',cursive;
  color: #ffc000;
  font-size: 18px;
  font-weight: 400;
  text-shadow: 0 1px 3px #000;
  text-align: center;
  padding: 10px 0;
  background: radial-gradient(circle, #8b0000, #8b0000);
  border-top: 4px ridge #ffb000;
  border-left: 4px groove #ffb000;
  border-right: 4px ridge #ffb000;
  border-bottom: 4px groove #ffb000;
  box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
  :hover {
    background: radial-gradient(circle, #e52b2b, #8b0000);
    box-shadow: 0px 0 5px 5px rgba(255, 255, 255, 0.2);
  }
  :active {
    background: radial-gradient(circle, #ec6a6a, #e52b2b);
    box-shadow: 0px 0 5px 5px rgba(255, 255, 255, 0.2);
  }
`;
