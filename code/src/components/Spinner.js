import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import GeoLoad from '../lotties/9911-geometric-abstract-loader.json'

export const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GeoLoad,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <LoadingWrap>
        <LottieCage>
          <Lottie animationData={GeoLoad} options={defaultOptions} height={100} width={100} />
        </LottieCage>
      </LoadingWrap>
    </div>
  )
}

// obs, Spinner background found in index.CSS global background
const LoadingWrap = styled.div`   
display: flex;
height: 100%;
width: 100%;
z-index: 2;
`

const LottieCage = styled.div`
margin: 0 auto;
padding-top: 30%;
width: 300px;
height: 300px;
@media (min-width: 790px) {
  padding-top: 25%;   
  }
  @media (min-width: 990px) {
    padding-top: 20%;
  }
`;
