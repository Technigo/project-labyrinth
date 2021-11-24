import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useWindowSize } from "@react-hook/window-size";
import "./LoadingStuff.css";

const Loader = styled.div`
  font-size: 0px;
  padding: 0px;
  z-index: 5;
  position: absolute;
  /* top: ${(props) => props.hgt / 4}px;
  left: ${(props) => props.wid / 4}px; */
  top: 50%;
  left: 50%;
  display: block;
`;

const LoaderBox = styled.div`
  height: ${(props) => props.hgt}px;
  width: ${(props) => props.wid}px;
  background-color: goldenrod;
  position: absolute;
  top: 0;
  z-index: 5;
`;

const LoadingStuff = () => {
  const [width, height] = useWindowSize();
  const loading = useSelector((store) => store.ui.loading);

  return (
    <>
      {loading && (
        <LoaderBox hgt={height} wid={width}>
          <Loader hgt={height} wid={width}>
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <div className="circle-4"></div>
            <div className="circle-5"></div>

            <div className="square-1"></div>
            <div className="square-2"></div>
            <div className="square-3"></div>
            <div className="square-4"></div>
          </Loader>
        </LoaderBox>
      )}
    </>
  );
};

export default LoadingStuff;
