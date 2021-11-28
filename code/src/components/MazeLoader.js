import Lottie from "react-lottie"
import React from "react"
import animationData from "./lotties/loader"

export const MazeLoader = () => {
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
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  )
}
