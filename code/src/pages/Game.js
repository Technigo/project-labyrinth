import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

import { LoadingIndicator } from "../components/LoadingIndicator";
import { moveFurther } from "../reducers/game";
import { Card } from "../components/Card";
import { imgUrl_00, imgUrl_10, imgUrl_11, imgUrl_01, imgUrl_02, imgUrl_03, imgUrl_13 } from "../utils/urls";
import Button from "../components/Button";

const Game = () => {
  const places = useSelector((state) => state.game.places);
/*   const end = useSelector((state) => state.game.places.actions.length === 0); */
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMoveFurther = (type, direction) => {
    dispatch(moveFurther(type, direction));
  };

  const ImagePicker = () => {
    if (places.coordinates === "0,0") {
      return imgUrl_00;
    } else if (places.coordinates === "1,0") {
      return imgUrl_10;
    } else if (places.coordinates === "1,1") {
      return imgUrl_11;
    } else if (places.coordinates === "0,1") {
      return imgUrl_01;
    } else if (places.coordinates === "0,2") {
      return imgUrl_02;
    } else if (places.coordinates === "0,3") {
      return imgUrl_03;
    } else if (places.coordinates === "1,3") {
      return imgUrl_13;
    } else return imgUrl_00;
  };

  const Container = styled.div`
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    padding: 20px 10px;
    margin: 2px;
    width: 50%;
    border-radius: 6px;
    background: lightgray;
    color: black;
    text-align: center;
    display: inline-block;
    opacity: 0.7;

    @media (max-width: 667px) {
    width: 80%;
  }
  `;

  const Main = styled.main`
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
    grid-template-rows: min-content;
    justify-content: center;
    padding: 0.625em;
    background-size: cover;
    background-position: center;
    text-align: center;
    flex-direction: column;
  `;

  return (
    <Main style={{ backgroundImage: `url(${ImagePicker()})` }}>
      <div>
        {loading ? <LoadingIndicator /> : 
          <>
            <Card thumbnailUrl title="The Labyrinth" secondaryText="Find your way to the light!" />
            <Container>
              <p>{places.description}</p>
              {places.actions.map((item) => (
                <div key={item.direction}>
                  <p>{item.description}</p>
                  <Button type="submit" onClick={() => handleMoveFurther(item.type, item.direction)}>
                    {item.type} {item.direction}
                  </Button>
                </div>
              ))} 
              {places.actions.length === 0 && (
                <Button type="button" onClick={() => navigate("/")}>
                  Restart
                </Button>
              )}
            </Container> 
          </>}
      </div>
    </Main>
  );
};

export default Game;
