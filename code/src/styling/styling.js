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

export const BackgroundContainer = styled.main`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin: 16px 0;
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

export const Button = styled.button`
<<<<<<< HEAD
  cursor: pointer;
=======
  width: 200px;
>>>>>>> 5ed5d55823fca09c217dd8b4cf4e788c63028b1a
  background: #0d71b9;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
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

export const Heading = styled.h1`
  font-size: 25px;
`;

export const TextContainer = styled.section`
  background: #000000;
  color: #ffffff;
  font-size: 16px;
  border-radius: 10px;
  padding: 30px;
  opacity: 0.7;
  text-align: center;
  border: 1px solid;
  border-image: linear-gradient(to right, transparent, #999, transparent) 5;

  @media (min-width: 667px) {
    width: 70%;
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
    flex-direction: row;
    justify-content: space-around;
`;

export const GroupCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 5px;
  width: 45%;
`;