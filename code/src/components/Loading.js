import React from 'react'
import { useSelector } from 'react-redux'
import { ChildContainer, StyledHeading } from '../styles/GlobalStyles'

const Loading = () => {
  const isLoading = useSelector((store) => store.labyrinth.isLoading)
  return (
    <ChildContainer>
      <StyledHeading>We will get there shortly...</StyledHeading>
      {isLoading
      && <lottie-player
        src="https://assets5.lottiefiles.com/private_files/lf30_esg1l8r1.json"
        background="transparent"
        speed="1"
        style={{ width: '200px',
          height: '200px' }}
        loop
        autoplay />}
    </ChildContainer>
  )
}
export default Loading;
