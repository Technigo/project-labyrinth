import React from "react";
import "@lottiefiles/lottie-player";
import { useSelector } from "react-redux";

import { CenteredScreen } from "../lib/Styling";

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading && (
        <CenteredScreen>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src={"https://assets9.lottiefiles.com/packages/lf20_q8m8gtvv.json"}
            style={{
              width: "80%",
              height: "80%",
              textAlign: "center",
            }}>
          </lottie-player>
        </CenteredScreen>
      )}
    </>
  );
};