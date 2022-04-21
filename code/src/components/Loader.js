import React from 'react'
import styled from 'styled-components'

const LoaderImg = styled.img`
margin-top: 20px;
`
const Loader = () => {
  return (
    <LoaderImg src="./icons/hero2.gif" alt="hero gif"/>
  )
}

export default Loader