import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import Wrapper from './Wrapper';
import Button from './Button';

function coordsToBackgroundImage(coords) {
  if (coords === '0,0') {
    return './assets/images/image_4.jpg'
  }

  return './assets/images/fallback.jpg'
}

const DirectionInput = ({ actions }) => {
  console.log('actions', actions)
  return (
    <ChooseDirectionWrapper>

      {/* <button type="button">North</button>
      <button type="button">East</button>
      <button type="button">South</button>
      <button type="button">West</button> */}

      {actions.map((action) => (
        <>
          <Button key={action.direction} type="button">
            {action.direction}
          </Button>
          <div>
            {action.description}
          </div>
        </>
      ))}

    </ChooseDirectionWrapper>
  )
}

const Description = () => {
  const description = useSelector((state) => state.game.description); // get description
  console.log('description', description)

  const bgImage = coordsToBackgroundImage(description.coordinates)
  console.log(bgImage)

  console.log(description)
  return (
    <DescriptionContainer bgImage={bgImage}>
      <Wrapper>

        <DescriptionText>{description.description}</DescriptionText>
        <DirectionInput
          actions={description.actions} />
      </Wrapper>
    </DescriptionContainer>
  )
}
export default Description;

const DescriptionContainer = styled.section`
border: solid 2px blue;
display: flex;
flex-direction: column;
justify-content: center;
/* background-image: url(${(props) => props.bgImage}); */
background-image: url('/assets/images/image_3.jpg');
min-height: 100vh;
background-size: cover;
background-position: top center;;
`
const DescriptionText = styled.div`
border: solid 2px green;
color: white;
margin-top: 330px;
`
const ChooseDirectionWrapper = styled.div`
border: solid 2px red;
display: grid;
`