import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import Lottie from "react-lottie"
import animationData from "./lotties/loader"

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  background-color: rgb(72, 80, 82);
`

export const Loader = () => {
  const loading = useSelector((state) => state.ui.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    loading === true && (
      <LoadingWrapper>
        <Lottie options={defaultOptions} height={350} width={350} />
      </LoadingWrapper>
    )
  )
}
