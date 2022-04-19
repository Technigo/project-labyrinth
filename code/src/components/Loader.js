import React from "react"
import Lottie from "react-lottie"
import animationData from "../animations/loading-double"
//import "./styles.css";
import { useSelector } from "react-redux"

export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.gamereducer.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <>
      {loading && <Lottie options={defaultOptions} height={400} width={400} />}
    </>
  )
}
