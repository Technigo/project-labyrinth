import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import ActionPage from "./ActionPage";
import StartingPage from "./StartingPage";
import LastPage from "./LastPage";
import Loader from "./Loader";

import img01 from "../images/img01.jpg";
import img03 from "../images/img03.jpg";
import img04 from "../images/img04.jpg";
import img06 from "../images/img06.jpg";
import img08 from "../images/img08.jpg";
import img09 from "../images/img09.jpg";
import img10 from "../images/img10.jpg";

const Background = styled.section`
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  object-fit: cover;
  object-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;
const MainContainer = styled.div`
  border-radius: 6px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  width: 90%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Container = () => {
  const loading = useSelector((store) => store.ui.isLoading);
  const currentStep = useSelector((store) => store.steps.currentStep);
  const coordinates = useSelector(
    (store) => store?.steps?.currentStep?.coordinates
  );

  const backgroundImage = () => {
    let bg = "";
    switch (coordinates) {
      case "0,0":
        bg = img01;
        break;
      case "1,0":
        bg = img04;
        break;
      case "1,1":
        bg = img06;
        break;
      case "0,1":
        bg = img09;
        break;
      case "0,2":
        bg = img10;
        break;
      case "0,3":
        bg = img08;
        break;
      case "1,3":
        bg = img03;
        break;
      default:
        return img06;
    }
    return bg;
  };

  const checkBoolean = (currentStep, actionsLength) => {
    if (currentStep && !actionsLength) return <LastPage />;
    else if (currentStep && actionsLength) return <ActionPage />;
    else return null;
  };

  return (
    <Background
      coordinates={coordinates}
      style={{ backgroundImage: `url(${backgroundImage()})` }}
    >
      <MainContainer>
        {loading && <Loader />}
        {!currentStep && <StartingPage />}
        {checkBoolean(currentStep, currentStep?.actions?.length)}
      </MainContainer>
    </Background>
  );
};

export default Container;
