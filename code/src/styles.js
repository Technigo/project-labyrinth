import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const GameArea = styled.main`
  background-image: url("https://images.pexels.com/photos/1731660/pexels-photo-1731660.jpeg?cs=srgb&dl=pexels-boris-ulzibat-1731660.jpg&fm=jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 30px;
  position: absolute;
`;

export const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff61;
  padding: 16px;
  border-radius: 15px;

  @media ${devices.tablet} {
    width: 445px;
  }

  @media ${devices.desktop} {
    width: 650px;
  }
`;

export const Heading = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: "Cormorant", serif;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  max-width: 200px;
  text-align: center;
  font-size: 20px;
  background: transparent;

  &:hover {
    font-style: italic;
  }

  &:-webkit-input-placeholder {
    color: rgb(42, 41, 41);
    text-align: center;
  }

  &:focus,
  &:active {
    outline: none;
    background: transparent;
  }
`;
