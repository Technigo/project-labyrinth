import React from "react";
import { useSelector } from "react-redux";
import "@lottiefiles/lottie-player";

export const Fireworks = () => {
  const coordinates = useSelector((state) => state.game.currentStep.coordinates);

  return (
    <>
      {coordinates === "1,3" && (
        <lottie-player
          autoplay
          loop
          mode="normal"
          src={"https://assets7.lottiefiles.com/packages/lf20_prbevyxv.json"}
          style={{
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}>
        </lottie-player>
      )}
    </>
  );
};
