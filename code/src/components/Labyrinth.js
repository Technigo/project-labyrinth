import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// Thunk nextStep
import { nextStep } from "../reducers/game";

// Styled components
const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Main = styled.main`
  width: 90%;
  padding:20px;
  background-color: rgba(255, 255, 255, 0.063);
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 500px;
  }
`;

const HeadingTwo = styled.h2`
  margin: 20px 10px;
  font-size: 1.2rem;
  text-align: center;
  color: #fff;
  font-family: "Indie Flower", cursive;
`;

const CoordinatesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom:20px;
`;

const Coordinates = styled.p`
  color: orange;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  border: 1px solid #fff;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding:20px;

  @media (min-width: 400px) {
  width: 50%;
  }
`;

const Button = styled.button`
width: 100px;
margin:20px auto;
`;

const Description = styled.p`
color:#fff;
`;

export const Labyrinth = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );
  const dispatch = useDispatch();

  // example on how to deal with changing color depengding on coordinates
  // const setBgColor = () => {

  //   let bg = 'pink'

  //   switch (coordinates) {
  //     case '0,0':
  //       bg = 'red'
  //       break
  //     case '1,0':
  //       bg = 'green'
  //       break
  //     case '1,1':
  //       bg = 'blue'
  //       break
  //     case '0,1':
  //       bg = 'yellow'
  //       break
  //     case '0,2':
  //       bg = 'orange'
  //       break
  //     case '0,3':
  //       bg = 'brown'
  //       break
  //     case '1,3':
  //       bg = 'purple'
  //       break
  //     default:
  //       bg = 'peach'
  //   }
  //   return bg
  // }

  //another way of doing it:
  // const colorDictionary = {
  //   '0,0': 'red',
  //   '1,0': 'pink',
  //   '1,1': 'blue',
  //   '0,1': 'yellow',
  //   '0,2': 'purple',
  //   '0,3': 'green',
  //   '1,3': 'orange',
  // }

  const handleButtonClick = (type, direction) => {
    // call the api, pass along type and direction to use as part of the body
    dispatch(nextStep(type, direction));
  };

  const ActionCard = ({ description, type, direction }) => (
      <Action>
        <Button onClick={() => handleButtonClick(type, direction)}>
          {type.toUpperCase()} {direction.toUpperCase()}
        </Button>
        <Description>{description}</Description>
      </Action>
  );

  return (
    // Two ways of implementing the color change
    // <section className='labyrinth' style={{ background: setBgColor() }}>
    // <Section style={{ background: colorDictionary[coordinates] }}>
    <Section>
      <Main>
        <HeadingTwo>{description}</HeadingTwo>
        <CoordinatesContainer>
          <Coordinates>Coordinates:{coordinates}</Coordinates>
        </CoordinatesContainer>

        {actions.length === 0 && <h3>Yay you made it out!</h3>}
        {actions.length > 0 &&
          actions.map((item) => <ActionCard key={item.direction} {...item} />)}
      </Main>
    </Section>
  );
};
