import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FetchNextMove } from "../reducers/game";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  color: black;
  margin: 25px;
  padding: 15px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background-color: rgba(255, 255, 255, 0.67);
  border-radius: 5px;
  width: 300px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  height: 150px;
`;
const Title = styled.h1`
  font-size: 16px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImage = styled.img`
  width: 90%;
  border-radius: 5px;
`;

const NextButton = styled.div`
  margin-top: 10px;
  display: inline-block;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 3px;
  width: 80px;
  text-align: center;

  &:hover {
    background-color: beige;
  }
`;

const Card = ({ title, description, direction, mainImage }) => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.username);

  const onNextMove = (direction) => {
    dispatch(FetchNextMove(direction, userName));
    console.log("test", direction);
  };

  return (
    <OuterContainer>
      <CardContainer>
        <TitleContainer>{title && <Title>{title}</Title>}</TitleContainer>
        <ImageContainer>
          {mainImage && <MainImage src={mainImage} />}
          {direction && (
            <NextButton onClick={() => onNextMove(direction)}>
              {" "}
              Go {direction}
            </NextButton>
          )}
        </ImageContainer>
      </CardContainer>
    </OuterContainer>
  );
};

export default Card;
