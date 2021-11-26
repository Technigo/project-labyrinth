import React from "react"
import Lottie from "react-lottie"
import animationData from "../animations/loading-maze"
import { useSelector } from "react-redux"

import "./loadingindicator.css"

export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.ui.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div className="lottie-container">
      <div className="lottie">
        {loading && (
          <Lottie options={defaultOptions} height={500} width={500} />
        )}
      </div>
    </div>
  )
}
