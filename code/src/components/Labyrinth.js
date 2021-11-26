import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
//Image
import trophy from "../assets/trophy.webp";
// Thunk nextStep
import { nextStep } from "../reducers/game";

// Styled components
const Section = styled.section`
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
    max-width: 500px;
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
// ActionCard component
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

//EndCard component
const EndCardContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeadingThree = styled.h3`
  position: absolute;
  top: 5px;
  font-size: 0.9rem;
  width: 200px;
  font-family: "Trispace", sans-serif;
  color: orange;
  text-align: center;
  border: 1px solid orange;
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

  const setBackground = () => {
    let image = "#000";

    switch (coordinates) {
      case "0,0":
        image =
          "url(https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)";
        break;
      case "1,0":
        image =
          "url(https://media.istockphoto.com/photos/abstract-full-frame-fire-cloud-background-picture-id1279551163?b=1&k=20&m=1279551163&s=170667a&w=0&h=b9FcjtXjwk2CHA8rAfMnjO5fUdd7M_Avt5JNO7fHs5Q=)";
        break;
      case "1,1":
        image =
          "url(https://media.istockphoto.com/photos/spooky-halloween-sky-picture-id1270108421?b=1&k=20&m=1270108421&s=170667a&w=0&h=t5hpRm4Mf4DO66tMx5_ajlMiLB7xbIA86SaWAB9ylgA=)";
        break;
      case "0,1":
        image =
          "url(https://images.unsplash.com/photo-1568478595157-5a428426c165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHR1bm5lbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)";
        break;
      case "0,2":
        image =
          "url(https://images.unsplash.com/photo-1599941662219-f95e5d125ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHR1bm5lbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)";
        break;
      case "0,3":
        image =
          "url(https://media.istockphoto.com/photos/an-abandoned-haunted-house-at-night-picture-id1283059337?b=1&k=20&m=1283059337&s=170667a&w=0&h=QXH3jpMp-JYcJzZe4xg1iOE2Tt97QKf2kcMDfBUlJ0U=)";
        break;
      case "1,3":
        image =
          "url(https://media.istockphoto.com/photos/closeup-of-confetti-picture-id1312429048?b=1&k=20&m=1312429048&s=170667a&w=0&h=Cp0aE5L9j5yNk7-jiKcrcouRMvYBVWPV0BBG0rpc61U=)";
        break;
      default:
        image =
          "url(https://images.unsplash.com/photo-1541336817102-1ce19112c4f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWlzdGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)";
    }
    return image;
  };

  const handleButtonClick = (type, direction) => {
    // call the api, pass along type and direction to use as part of the body for the post method
    dispatch(nextStep(type, direction));
  };

  // ActionCard component
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
      <Image src={trophy} />
    </EndCardContainer>
  );

  return (
    <Section style={{ backgroundImage: setBackground() }}>
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
