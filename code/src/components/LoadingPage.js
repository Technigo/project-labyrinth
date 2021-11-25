import React from "react";
import styled from "styled-components";

const LoadingText = styled.h1`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingPage = () => {
  return (
    <Overlay>
      <LoadingText>Loading.....</LoadingText>
    </Overlay>
  );
};
