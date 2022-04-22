import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const LoadingIndicator = () => {
  return (
    <Main>
      <h1>Loading...</h1>
    </Main>
  );
};

export default LoadingIndicator;
