import React from 'react';
import styled from 'styled-components'

const Description = () => {
  return (
    <DescriptionContainer>
      <DescriptionText>Description</DescriptionText>
      <ChooseDirectionWrapper>
        <Button>North</Button>
        <Button>Esast</Button>
        <Button>South</Button>
        <Button>West</Button>
      </ChooseDirectionWrapper>
    </DescriptionContainer>
  )
}
export default Description;

const DescriptionContainer = styled.section`
border: solid 2px blue;
`
const DescriptionText = styled.div`
border: solid 2px green;
`
const ChooseDirectionWrapper = styled.div`
border: solid 2px red;
`
const Button = styled.button`
border: solid 2px red;
`