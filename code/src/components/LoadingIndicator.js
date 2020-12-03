import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components/macro";
import Loader from "react-loader-spinner";

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.game.isLoading);

  return (
    <Container>
      {isLoading && (
        <Loader
          type="Oval"
          color="#ff0000"
          height={100}
          width={100}
          timeout={5000}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
