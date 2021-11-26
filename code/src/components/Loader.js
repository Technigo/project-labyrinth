import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import Lottie from "react-lottie"
import animationData from "../lib/loader"

// Styled components
const LoaderOverlay = styled.div`
  position: fixed; 
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`

// Loader component
const Loader = () => {
  const loading = useSelector(store => store.ui.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <>
      {loading && (
        <LoaderOverlay>
          <Lottie options={defaultOptions} height={400} width={400} />
        </LoaderOverlay>
      )}
    </>
  )
}

export default Loader
