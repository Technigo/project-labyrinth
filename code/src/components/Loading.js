import React from "react";
// import styled from "styled-components/macro";
import Lottie from "react-lottie";
import { useSelector } from "react-redux";

import { CenteredScreen } from "../lib/Styling";
// import { Foxy } from "../assets/lottie_fox.json";
import animationData from "../assets/loader.json";

// const Loader = styled.div`
//   border: 16px solid #f3f3f3;
//   border-top: 16px solid #ff6932;
//   border-radius: 50%;
//   width: 200px;
//   height: 200px;
//   animation: spin 2s linear infinite;

//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `;

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      {isLoading && (
        <CenteredScreen>
          <Lottie
            options={defaultOptions}
            height={250}
            width={250} />
        </CenteredScreen>
      )}
    </>
  )
};
