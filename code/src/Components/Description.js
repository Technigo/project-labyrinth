import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import Button from './Button';
import Header from './Header';

const Description = () => {
  const description = useSelector((state) => state.game.description); // get description
  console.log('description', description)
  return (
    <DescriptionContainer>
      <Header />
      <DescriptionText>{description.description}</DescriptionText>
      <ChooseDirectionWrapper>
        <Button>North</Button>
        <Button>East</Button>
        <Button>South</Button>
        <Button>West</Button>
      </ChooseDirectionWrapper>
    </DescriptionContainer>
  )
}
export default Description;

const DescriptionContainer = styled.section`
border: solid 2px blue;
display: flex;
flex-direction: column;
justify-content: center;
`
const DescriptionText = styled.div`
border: solid 2px green;
`
const ChooseDirectionWrapper = styled.div`
border: solid 2px red;
display: grid;
`