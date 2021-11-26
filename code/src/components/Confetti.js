import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import Lottie from "react-lottie"
import animationData from "../lib/end"

// Styled components
const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`

// Loader component
const Confetti = () => {

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <>
      {!defaultOptions.loop && (
        <Overlay>
          <Lottie options={defaultOptions} min-height={400} min-width={400} />
        </Overlay>
      )}
    </>
  )
}

export default Confetti
