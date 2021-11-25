import React from 'react'
import { useSelector } from 'react-redux'
import Lottie from 'react-lottie'
import animationData from '../lotties/404'

const NotFoundPage = () => {
  const pageNotFound = useSelector((state) => state.ui.pageNotFound)

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
      {pageNotFound && (
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      )}
    </>
  )
}

export default NotFoundPage
