import React from "react";
import { useSelector } from "react-redux";

import styled, { keyframes } from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 216, 18, 0.9);
  z-index: 10;
`;
const loaderAnimation = keyframes`
0% {transform: rotate(0deg)}
100% {transform: rotate(360deg)}
`;
const Loading = styled.div`
  border-top: 16px solid black;
  border-right: 16px solid white;
  border-bottom: 16px solid black;
  border-left: 16px solid white;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  -webkit-animation: ${loaderAnimation} 2s linear infinite; /* Safari */
  animation: ${loaderAnimation} 2s linear infinite;
`;
const Loader = () => {
  const store = useSelector((store) => store.game);

  if (store.loading) {
    return (
      <LoaderWrapper>
        <Loading />
      </LoaderWrapper>
    );
  } else {
    return <></>;
  }
};

export default Loader;
