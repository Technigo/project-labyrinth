import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

const Loading = () => {  

  const lottieContainer = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require("../assets/animations/map.json")
  })
  }, [])

  return (
  <div className="lottieContainer" ref={lottieContainer}/>
  )
}

export default Loading