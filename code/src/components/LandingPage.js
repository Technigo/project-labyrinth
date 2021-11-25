import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { quest } from "reducers/quest";
import styled from "styled-components/macro";
import plus from "../assets/black-plus.svg";
import start from "../assets/cosmos.jpg";

const Input = styled.input`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  font-family: "Nunito", sans-serif;
  outline: none;
  border: transparent;
  text-decoration: none;
  border-radius: 20px;
  color: goldenrod;
  font-size: 16px;
  padding: 4px;
  margin-left: 10px;
  font-weight: bolder;
  background-color: transparent;

  @media (min-width: 768px) {
    width: 418px;
    height: 40px;
    font-size: 20px;
  }
`;

const InputBtn = styled.button`
  border-radius: 2px;
  border: none;
  background-color: transparent;
  border-left: 2px solid white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    padding: 16px;
  }
`;

const InputWrapper = styled.div`
  margin: 20px;
  padding: 6px;
  display: flex;
  align-self: center;
  justify-self: center;
  flex-direction: row;
  border: 2px solid white;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  filter: hue-rotate(-20deg);
`;

const PopUp = styled.div`
  margin-top: 16px;
  display: flex;
  color: #3f3e3e;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 26px;
    margin-top: 50px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-family: "Bebas Neue", cursive;
  margin-bottom: ${(props) => props.marginBottom}px;
  color: white;
  font-size: 30px;
  @media (min-width: 768px) {
    font-size: 56px;
    margin-bottom: 50px;
  }
`;

export const LandingContainer = styled.section`
  display: flex;
  max-height: 300px;
  height: 250px;
  flex-direction: column;
  width: 300px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  padding: 20px;
  padding-bottom: 12px;
  @media (min-width: 768px) {
    width: 600px;
    padding: 40px;
    max-height: 600px;
    height: ${(props) => props.heightMedia}px;
  }
`;

export const LandingPage = () => {
  document.body.style.backgroundImage = `url(${start})`;
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const createHeroName = (e) => {
    if (name === "") {
      setError(true);
    }
    e.preventDefault(e);
    dispatch(quest.actions.setPlayersName(name));
  };

  return (
    <LandingContainer heightMedia={400}>
      <FormWrapper>
        <form onSubmit={(e) => createHeroName(e)}>
          <Header marginBottom={40}>Start your adventure!</Header>
          <InputWrapper>
            <Input height={30} width={218} type="text" placeholder="type your name" onChange={(e) => setName(e.target.value)}></Input>
            <InputBtn height={40} width={40} type="submit">
              {" "}
              <img className="plus" src={plus} alt="plus" area-label="plus"></img>{" "}
            </InputBtn>
          </InputWrapper>
          {error && <PopUp>please fill in your hero name</PopUp>}
        </form>
      </FormWrapper>
    </LandingContainer>
  );
};
