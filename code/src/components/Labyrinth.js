import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import img from "../assets/candles.jpeg";
import Trophy from "../assets/trophy.webp";
// Thunk nextStep
import { nextStep } from "../reducers/game";

// Styled components
const Section = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Main = styled.main`
  width: 90%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.063);
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 600px;
  }
`;

const HeadingTwo = styled.h2`
  margin: 10px;
  font-size: 1.2rem;
  text-align: center;
  color: #fff;
  font-family: "Indie Flower", cursive;
`;

const CoordinatesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Coordinates = styled.p`
  color: orange;
  font-family: "Indie Flower", cursive;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  border: 1px solid #fff;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;
  font-family: "Indie Flower", cursive;

  @media (min-width: 400px) {
    max-width: 70%;
  }
`;

const Button = styled.button`
  width: 120px;
  margin: 10px auto;
  transition: all 0.3s ease;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  border: none;
  background-color: #b87209;
  color: #fff;

  :hover {
    background-color: black;
    color: orange;
    transform: scale(1.1, 1.1);
  }
`;

const Description = styled.p`
  color: whitesmoke;
  margin: 5px;
`;

const EndCardContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeadingThree = styled.h3`
  position: absolute;
  top:5px;
  font-size: 0.9rem;
  width: 200px;
  font-family: "Trispace", sans-serif;
  color: orange;
  text-align: center;
  border:1px solid orange;
  background-color: red;
  padding: 5px;

  @media (min-width: 400px) {
font-size: 1.1rem;

  }
`;

const Image = styled.img`
  width: 100%;

  @media (min-width: 400px) {
    width: 300px;
   height: 300px;
  }
`;

export const Labyrinth = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );
  const dispatch = useDispatch();

  const setBgColor = () => {
    let bg = "pink";

    switch (coordinates) {
      case "0,0":
        bg = "red";
        break;
      case "1,0":
        bg = "green";
        break;
      case "1,1":
        bg = "blue";
        break;
      case "0,1":
        bg = "yellow";
        break;
      case "0,2":
        bg = "orange";
        break;
      case "0,3":
        bg = "brown";
        break;
      case "1,3":
        bg = "purple";
        break;
      default:
        bg = "peach";
    }
    return bg;
  };

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
    // call the api, pass along type and direction to use as part of the body for the post method
    dispatch(nextStep(type, direction));
  };

  // Action component
  const ActionCard = ({ description, type, direction }) => (
    <Action>
      <Button onClick={() => handleButtonClick(type, direction)}>
        {type.toUpperCase()} {direction.toUpperCase()}
      </Button>
      <Description>{description}</Description>
    </Action>
  );

  // EndCard component
  const EndCard = () => (
    <EndCardContainer>
      <HeadingThree>You made it out! Congratulations!</HeadingThree>
      <Image src={Trophy} />
    </EndCardContainer>
  );

  return (
    // Two ways of implementing the color change
    // <section className='labyrinth' style={{ background: setBgColor() }}>
    // <Section style={{ background: colorDictionary[coordinates] }}>
    <Section>
      <Main>
        <HeadingTwo>{description}</HeadingTwo>
        <CoordinatesContainer>
          <Coordinates>Coordinates: {coordinates}</Coordinates>
        </CoordinatesContainer>

        {actions.length === 0 && <EndCard />}
        {actions.length > 0 &&
          actions.map((item) => <ActionCard key={item.direction} {...item} />)}
      </Main>
    </Section>
  );
};
