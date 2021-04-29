import styled, { keyframes } from 'styled-components';

// Buttons
export const Button = styled.button`
  background-color: #34623F;
  border: none; 
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  cursor: grab;
  border-radius: 10px;
  outline: none;
  :hover {
    box-shadow: 0px 0px 15px -2px #34623F;
  }
  :focus {
    transform: scale(1.1);
  }
`;

export const RestartButton = styled(Button)`
  margin-top: 20px;
`;

// For StartScreen
const opacity = keyframes`
  0% {opacity: 0;}
  60% {opacity: 0;)}
  100% {opacity: 1;}`


export const StartContainer = styled.form`
  display: flex;
  flex-direction: column;
  animation: ${opacity} 3.5s linear;
`;

export const Welcome = styled.h1`
  color: white;
  text-align: center;
  font-size: 45px;
  font-family: 'Courgette', cursive;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;
  letter-spacing: 1.8px;
  @media (min-width: 769px) {
    font-size: 60px;
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  background-color: black;
  border: none;
  border-bottom:2px solid white;
  margin: 20px 0;
  padding: 10px 5px 5px 5px;
  font-size: 18px;
  color: white;
  outline: none;
  border-radius: 5px;
  :focus {
    background-color: #1c1a1a;
    color: white;
  }
  @media (min-width: 769px) {
    margin: 20px 0 30px 0;
  }
`;

// For Question
export const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  font-family: 'Roboto', sans-serif;
  @media (min-width: 1200px) {
      width: 80%;
  }
`;

export const QuestionContainer = styled(MainContainer)`
  margin: 10px; 
  @media (min-width: 1025px) {
    flex-direction: row;
    width: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  justify-content: space-between;
  padding: 10px 10px 15px 10px;
  width: 100%;
  align-items: center;
  background-color: #1c1a1a;
  height: auto;
  @media (min-width: 1025px) {
    padding: 10px 20px 20px 20px;
    height: 220px;
  }
  @media (min-width: 1433px) {
    height: 195px;
  }
`;

export const TitleText = styled.h3`
  color: white;
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  color: white;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

// For SummaryPage
export const SummaryContainer = styled(Container)`
  margin: 10px;
  color: white;
  @media (min-width: 769px) {
    padding: 20px;
    height: auto;
    width: 60%;
`;

export const ThankYou = styled.h2`
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 15px;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const PathContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 0 0 3px 0;
  padding: 0;
`;

export const Arrow = styled.p`
  margin: 0 5px 0 0;
  font-weight: bold;
`;

export const Item = styled.p`
  font-family: 'Roboto', sans-serif;
  margin: 0;
`;