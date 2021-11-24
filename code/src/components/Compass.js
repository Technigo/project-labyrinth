import React from 'react'
import styled from 'styled-components'

const Compass = ({ image }) => {
  return <CompassWrapper style={{ backgroundImage: image }} />
}

export default Compass

const CompassWrapper = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  background-repeat: no-repeat;
`
