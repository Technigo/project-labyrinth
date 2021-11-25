import React from 'react'
import { useSelector } from 'react-redux'
import Lottie from 'react-lottie'
import animationData from '../lotties/loader'

const Loader = () => {
  const loading = useSelector((state) => state.ui.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      {loading && (
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      )}
    </>
  )
}

export default Loader
