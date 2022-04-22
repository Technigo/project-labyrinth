import React from "react"
import Lottie from "react-lottie"
import animationData from "../lotties/congrats"
import { StyledCongrats } from "styles"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  renderSettings: {
    preserveAspectRation: "xMidYMid slice",
  },
}

const Congrats = () => (
  <StyledCongrats>
    <Lottie options={defaultOptions} />
  </StyledCongrats>
)

export default Congrats
