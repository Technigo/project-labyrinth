import styled from "styled-components/macro";

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CenteredScreen = styled(Centered)`
  min-height: 80vh;
`;

export const Button = styled.button`
  background-color: #f1e3b0;
  color: black;
  border: none;
  border-radius: 5%;
  padding: 10px;
  margin: 0 10px;
  font-family: inherit;
  font-size: inherit;

  &:hover {
    cursor: pointer;
    background-color: #e4d08a;
  }
`;

export const ActionButton = styled(Button)`
  padding: 5px;
  grid-area: button;
  margin: 0;

  @media (min-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-family: "Texturina", serif;
  font-size: 40px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 60px;
  }
`;

export const Text = styled.p`
  margin: 0 0 5px 0;

  @media (min-width: 768px) {
    margin: 0 0 15px 0;
  }
`;

export const StartText = styled(Text)`
  margin: 40px 0;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const SmallText = styled(Text)`
  font-size: 10px;
  margin: 0 0 5px 0;

  @media (min-width: 768px) {
    font-size: 13px;
    margin: 0 0 15px 0;
  }
`;