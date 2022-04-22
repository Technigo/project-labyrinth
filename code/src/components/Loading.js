import React from "react"
import Lottie from "react-lottie"
import animationData from "../lotties/labyrinth"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  renderSettings: {
    preserveAspectRation: "xMidYMid slice",
  },
}

const Loading = () => <Lottie options={defaultOptions} />

export default Loading
