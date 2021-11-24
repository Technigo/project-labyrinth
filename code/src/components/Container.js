import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import ActionPage from "./ActionPage";
import StartingPage from "./StartingPage";
import Loader from "./Loader";

const MainContainer = styled.div`
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 50px auto;
  width: 90%auto;
  max-width: 400px;
`;

const Container = () => {
  const loading = useSelector((store) => store.ui.isLoading);
  const steps = useSelector((store) => store.steps.steps);

  return (
    <MainContainer>
      {loading && <Loader />}
      {!steps.length && <StartingPage />}
      {steps.length && <ActionPage />}
    </MainContainer>
  );
};

export default Container;
