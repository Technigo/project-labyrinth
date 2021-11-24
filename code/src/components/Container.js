import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import ActionPage from "./ActionPage";
import StartingPage from "./StartingPage";
import LastPage from "./LastPage";
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
  width: 90%;
  max-width: 400px;
`;

const Container = () => {
  const loading = useSelector((store) => store.ui.isLoading);
  const steps = useSelector((store) => store.steps.steps);
  const lastStep = useSelector((store) => store.steps.steps.at(-1));

  const checkBoolean = (stepsLength, actionsLength) => {
    if (stepsLength && !actionsLength) return <LastPage />;
    else if (stepsLength && actionsLength) return <ActionPage />;
    else return null;
  };

  /* Bestämmer vad som ska visas, maincontainer är själva cardet
Hämtat loading från store, om loading är sant så visas den
!steps.lenght, betyder om det inte finns någon array så visas starting page*/
  return (
    <MainContainer>
      {loading && <Loader />}
      {!steps.length && <StartingPage />}
      {checkBoolean(steps.length, lastStep?.actions?.length)}
    </MainContainer>
  );
};

export default Container;
