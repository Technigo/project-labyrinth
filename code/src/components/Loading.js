import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
`

const Loading = () => {
  return (
    <LoadingContainer>
      <lottie-player
        src="https://assets6.lottiefiles.com/private_files/lf30_DGRf6G.json"
        background="transparent"
        speed="1"
        style={{width: "300px", height: "300px"}}
        loop autoplay>
      </lottie-player>
    </LoadingContainer>
  )
};


export default Loading;