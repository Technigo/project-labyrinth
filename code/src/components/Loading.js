import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

const Loading = () => {
  const loading = useSelector(state => state.games.loading)

  return (
    <Background>
      {loading &&
        <div>
          <lottie-player 
            src='https://assets6.lottiefiles.com/private_files/lf30_kanwuonz.json'  
            background='transparent'  
            speed='1'  
            style={{width: '300px', height: '300px'}}  
            loop autoplay
            margin='auto'>
          </lottie-player>
        </div>
      }
    </Background>
  )
}

export default Loading

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  padding-top: 45px;
`
