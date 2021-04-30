import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

import gameFetch, { secondFetch } from "../reducers/gameFetch";
import Loading from "./Loading";
import EndScreen from "./EndScreen";

const GameScreen = () => {
  const gameDescription = useSelector((store) => store.gameFetch.description);
  const gameActions = useSelector((store) => store.gameFetch.actions);
  const userName = useSelector((store) => store.gameFetch.userName);
  const loading = useSelector((store) => store.gameFetch.loading);
  const coordinates = useSelector((store) => store.gameFetch.coordinates);

  //console.log("gameActions: ", gameActions);
  //console.log("gameDescription: ", gameDescription);

  // const img1 = "../assets/1.jpg";
  // const img2 = "../assets/2.jpg";
  // const img3 = "../assets/3.jpg";
  // const img4 = "../assets/4.jpg";
  // const img5 = "../assets/5.jpg";
  // const img6 = "../assets/6.jpg";

  const dispatch = useDispatch();

  const onMove = (direction) => {
    dispatch(secondFetch(userName, direction));
    console.log(coordinates);
  };

  return (
    <>
      {loading && <Loading />}
      {coordinates === "1,3" && <EndScreen />}

      {!loading && (
        <GameContainer coordinates={coordinates}>
          <Content>
            <InnerContainer>
              <GameDescription>{gameDescription}</GameDescription>

              {gameActions.map((choice) => (
                <div key={choice.direction}>
                  <p>{choice.description}</p>
                  <Button onClick={() => onMove(choice.direction)}>
                    {choice.direction}
                  </Button>
                </div>
              ))}
            </InnerContainer>
          </Content>
        </GameContainer>
      )}
    </>
  );
};

export default GameScreen;

const GameContainer = styled.div`
  background-image: url(${(props) =>
    props.coordinates === "0,0"
      ? img1
      : props.coordinates === "1,0"
      ? img2
      : props.coordinates === "1,1"
      ? img3
      : props.coordinates === "0,1"
      ? img4
      : props.coordinates === "0,2"
      ? img5
      : props.coordinates === "0,3"
      ? img6
      : "./assets/6.jpg"});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 300px;
  border: 6px double;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f7f5e1;
  border-radius: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100vh;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  border: #f7f5e1;
  font-size: 16;
  cursor: pointer;
`;

const GameDescription = styled.text`
  font-size: 18px;
`;
