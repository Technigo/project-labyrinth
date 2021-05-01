import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import img from "../assets/7.jpg";

import gameFetch from "../reducers/gameFetch";

const EndScreen = ({ gameDescription }) => {
  const userName = useSelector((store) => store.gameFetch.userName);

  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(gameFetch.actions.setName(null));
  };

  return (
    <Container>
      <Content>
        <InnerWrap>
          <EndDescription>
            Congratulations {userName}, you made it through the labyrinth!"
          </EndDescription>
          <GameDescription>{gameDescription}</GameDescription>
          <Button onClick={onRestart}>Restart</Button>
        </InnerWrap>
      </Content>
    </Container>
  );
};

export default EndScreen;

const Container = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  min-height: 300px;
  border: 6px double;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f7f5e1;
  border-radius: 15px;
  text-align: center;

  @media (min-width: 768px) {
    min-width: 600px;
    min-height: 300px;
    padding: 30px 30px 30px 30px;
  }
`;

const EndDescription = styled.p`
  padding-bottom: 20px;
  font-size: 18px;
`;

const GameDescription = styled.p`
  font-size: 16px;
  font-family: "Raleway", sans-serif;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  background: #cfb05d;
  border: #f7f5e1;
  -webkit-box-shadow: inset 1px 1px 10px #333;
  -moz-box-shadow: inset 1px 1px 10px #333;
  box-shadow: inset 1px 1px 3px #333;
  color: #000;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
