import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import img from "../assets/start.jpg";

import gameFetch, { firstFetch } from "../reducers/gameFetch";
import Loading from "./Loading";

const StartScreen = () => {
  const [userName, setUserName] = useState("");
  const loading = useSelector((store) => store.gameFetch.loading);

  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(gameFetch.actions.setName(userName));
    dispatch(firstFetch(userName));
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Container>
          <Content>
            <label>Welcome! Please enter your name:</label>
            <form>
              <input
                type='text'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </form>
            <button onClick={onStartGame}>Start!</button>
          </Content>
        </Container>
      )}
    </>
  );
};

export default StartScreen;

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
