import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('https://i.postimg.cc/MpzSgVzX/cropped-1920-1080-978581.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

export const Body = styled.div`
  height: 100vh;
  background-image: url('https://i.ibb.co/wpDztHS/2435565.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

export const Main = styled.main`
  display: flex;
  color: white;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100vh;
  letter-spacing: 1.5px;
  text-align: center;

  @media (max-width: 767px) {
    height: auto;
  }

  @media (min-width: 768) and (max-width: 1023px) {
    //  top: 100px;
    align-items: flex-start;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  background: rgba(255, 255, 255, 0.7);
  margin: 30px 60px;
  position: relative;
  box-sizing: border-box;
  overflow: auto;

  border-radius: 5px;
  padding: 10px;
  text-shadow: -1px 2px white;

  @media (max-width: 768px) {
    align-items: center;
    padding: 10px;
    width: 100%;
    margin: 10px;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: lighter;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Choices = styled.div`
  margin: 10px auto;
  padding: 10px;
  border-top: 5px solid blue;
  border-bottom: 5px solid blue;
  position: relative;
  width: 80%;

  &:before,
  &:after {
    content: '';
    top: 0;
    width: 5px;
    height: 100%;
    position: absolute;
    background: blue;
  }
  &:before {
    left: -5px;
  }

  &:after {
    right: -5px;
  }
`;

export const ChoicesText = styled.div`
  text-align: center;
  margin: 0;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StartContainer = styled.div`
  text-align: center;
  text-shadow: -1px 2px black;

  input {
    padding: 5px;
  }
  @media (max-width: 768px) {
  }
`;

export const InputFlex = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: 50%;
    margin: 10px auto;
  }

  @media (max-width: 768px) {
    input {
      width: 80%;
    }
  }
`;

export const EndPage = styled.div`
  width: 80%;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  text-align: center;
  color: black;
  border-top: 10px dashed orange;
  border-bottom: 10px dashed orange;
  position: relative;

  &:before,
  &:after {
    content: '';
    top: 0;
    width: 10px;
    height: 100%;
    position: absolute;
    background: orange;
  }
  &:before {
    left: -10px;
  }

  &:after {
    right: -10px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const EndTitle = styled.h1`
  display: inline;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Gif = styled.iframe`
  margin: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
  padding: 5px;
  cursor: pointer;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.6);
  justify-content: center;
  margin: 10px;
`;
