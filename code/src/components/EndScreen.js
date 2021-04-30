import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import img from "../assets/7.jpg";

import gameFetch from "../reducers/gameFetch";

const EndScreen = () => {
  const userName = useSelector((store) => store.gameFetch.userName);
  //const gameDescription = useSelector((store) => store.gameFetch.description);

  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(gameFetch.actions.setName(null));
  };

  return (
    <Container>
      <Content>
        <p>Congratulations {userName}, you made it through the labyrinth!"</p>
        <button onClick={onRestart}>Restart</button>
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
