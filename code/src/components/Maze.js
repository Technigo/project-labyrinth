import Lottie from "react-lottie"
import React from "react"
import animationData from "../lotties/loader"

export const Maze = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}
