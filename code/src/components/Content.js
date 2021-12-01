import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { game } from "reducers/game";
import styled from "styled-components";

import Header from "./Header";
import Options from "./Options";

const Wrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.url});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Content = () => {
  const store = useSelector((store) => store.game.currentPosition);
  const imageUrl = useSelector((store) => store.game.backgroundPath);
  const dispatch = useDispatch();
  if (store.coordinates) {
    switch (store.coordinates) {
      case "1,0":
        dispatch(game.actions.changeBackground("../images/maze2.jpeg"));
        break;
      case "0,1":
        dispatch(game.actions.changeBackground("../images/maze3.jpeg"));
        break;
      case "0,2":
        dispatch(game.actions.changeBackground("../images/maze5.jpeg"));
        break;
      default:
        dispatch(game.actions.changeBackground("../images/maze.jpeg"));
    }
  }
  return (
    <Wrapper url={imageUrl}>
      <Header />
      <Options />
    </Wrapper>
  );
};

export default Content;
