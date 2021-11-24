import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../animations/31848-footprint.json'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const LoaderBackground = styled.div`
background-color: grey;
`

export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.game.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <>
    {loading && (
      <LoaderBackground>
        {loading && <Lottie options={defaultOptions} height={400} width={400} />}   
      </LoaderBackground>
  )
}
</>
  )
}
