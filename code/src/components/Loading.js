import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Loading = () => {
  const loading = useSelector(state => state.games.loading)

  return (
    <>
      {loading &&
        <LoadingWrapper>
          <h1>Testing testing</h1>
          <lottie-player 
            src='https://assets6.lottiefiles.com/private_files/lf30_kanwuonz.json'  
            background='transparent'  
            speed='1'  
            style={{width: '300px', height: '300px'}}  
            loop autoplay>
          </lottie-player>
        </LoadingWrapper>
      }
    </>
  )
}

export default Loading

const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`
