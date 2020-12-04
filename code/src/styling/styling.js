import styled from "styled-components/macro";
import startImage from "../img/creepy_treehouse.png";

import {
  imgUrl_00,
  imgUrl_01,
  imgUrl_02,
  imgUrl_03,
  imgUrl_10,
  imgUrl_11,
  imgUrl_13,
} from "../styling/backgroundImage";

// Global styling goes here

export const Heading = styled.h1`
  font-size: 28px;
`;

export const BackgroundContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) =>
      props.coordinates === "1,3"
      ? imgUrl_13
      : props.coordinates === "0,0"
      ? imgUrl_00
      : props.coordinates === "0,1"
      ? imgUrl_01
      : props.coordinates === "0,2"
      ? imgUrl_02
      : props.coordinates === "0,3"
      ? imgUrl_03
      : props.coordinates === "1,0"
      ? imgUrl_10
      : props.coordinates === "1,1"
      ? imgUrl_11 
      : startImage });
`;

export const Divider = styled.div`
  margin: 5px 0;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, transparent, #999, transparent) 5;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const UserInput = styled.input`
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
  font-family: "Texturina", serif;
  width: 200px;
`;

// Style for buttons
export const Button = styled.button`
  width: 50%;
  background: #0d71b9;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 5px;
  color: #fff;
  font-size: 20px;
  font-family: "Texturina", serif;
  text-align: center;
  transition: letter-spacing 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    letter-spacing: 1px;
    background: #0d91b9;
    font-weight:bold;
  }

  @media (min-width: 667px) {
    width: 30%;
    padding: 10px;
  }

  @media (min-width: 1100px) {
    width: 40%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const DirectionButton = styled.button`
  width: 100%;
  background: #0d71b9;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 5px;
  color: #fff;
  font-size: 20px;
  font-family: "Texturina", serif;
  text-align: center;
  transition: letter-spacing 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    letter-spacing: 1px;
    background: #0d91b9;
    font-weight:bold;
  }
`;

export const TextContainer = styled.section`
  max-width: 600px;
  text-align: center;
  background: #000000;
  color: #ffffff;
  font-size: 14px;
  border-radius: 10px;
  opacity: 0.7;
  border: 1px solid;
  border-image: linear-gradient(to right, transparent, #999, transparent) 5;

  @media (min-width: 667px) {
    width: 80%;
    padding: 10px;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ActionHeading = styled.h2`
 font-weight: bold;
 `;

 export const Description = styled.p`
  font-style: italic;
 `;

export const GroupRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const GroupCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 0 5px;
`;