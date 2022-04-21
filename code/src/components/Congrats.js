import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/congrats";
import { StyeldCongrats } from "styles";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  renderSettings: {
    preserveAspectRation: "xMidYMid slice",
  },
};

const Congrats = () => (
  <StyeldCongrats>
    <Lottie options={defaultOptions} />
  </StyeldCongrats>
);

export default Congrats;
