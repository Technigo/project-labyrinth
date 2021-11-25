import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { game } from "reducers/game";

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgb(4, 4, 4), rgba(234, 231, 231, 0.568)),
    url("/assets/labyrinth.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  height: 100vh;
  padding: 15px 20px;

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 992px) {
    padding-top: 5%;

    p {
      width: 600px;
    }
  }
`;

const Button = styled.button`
  font-size: 18px;
  margin: 20px auto;
  width: 120px;
  border-radius: 6px;
  padding: 4px;
  background-color: black;
  color: white;

  @media (min-width: 768px) {
    margin: 50px;
  }
`;

const History = () => {
  const history = useSelector((store) => store.game.history);
  const initialState = useSelector((store) => store.game.initialState);
  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(
      game.actions.restart({
        initialState,
      })
    );
  };

  return (
    <HistoryContainer>
      <h1>You Made it!!</h1>
      <p>{history.map((item) => item.description)}</p>
      <Button onClick={() => onRestart()}>Play again</Button>
    </HistoryContainer>
  );
};

export default History;
