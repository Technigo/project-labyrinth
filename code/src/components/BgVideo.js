import React from 'react'
import styled from 'styled-components/macro'
import backgroundVideo from '../assets/Forest.mp4'
import backgroundImage from '../assets/startImage.jpg'

const VideoBackground = () => {
  return (
    <Video autoPlay loop muted poster={backgroundImage}>
      <source src={backgroundVideo} type="video/mp4" />
      Your browers does not support this video tag
    </Video>
  )
}
export default VideoBackground;

const Video = styled.video`
  height: 100%;  
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  z-index: -99;
`