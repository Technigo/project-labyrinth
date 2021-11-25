import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  background-image: url('https://i.postimg.cc/MpzSgVzX/cropped-1920-1080-978581.png');
  background-size: cover;
`;

export const Loader = styled.div`
  padding: 15%;
`;

export const Main = styled.main`
  display: flex;
  color: white;
  background-image: url('https://i.ibb.co/wpDztHS/2435565.png');
  background-size: cover;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100vh;
  width: 100vw;
  letter-spacing: 1.5px;
  text-shadow: -1px 2px white;
  text-align: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 60%;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-top: 10px solid white;
  border-bottom: 10px solid white;
  position: relative;

  &:before,
  &:after {
    content: '';
    top: 0;
    width: 10px;
    height: 100%;
    position: absolute;
    background: white;
  }
  &:before {
    left: -10px;
  }

  &:after {
    right: -10px;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: lighter;
`;

// export const Directions = styled.div`

/* border-top: 5px solid orange;
  border-bottom: 5px solid orange;
  position: relative;

  &:before,
  &:after {
    content: '';
    top: 0;
    width: 5px;
    height: 100%;
    position: absolute;
    background: orange;
  }
  &:before {
    left: -5px;
  }

  &:after {
    right: -5px;
  } 
`;*/

export const Choices = styled.div`
  margin: 10px;
  padding: 10px;
  border-top: 5px solid orange;
  border-bottom: 5px solid orange;
  position: relative;

  &:before,
  &:after {
    content: '';
    top: 0;
    width: 5px;
    height: 100%;
    position: absolute;
    background: orange;
  }
  &:before {
    left: -5px;
  }

  &:after {
    right: -5px;
  }
`;

export const StartContainer = styled.div`
  text-align: center;
  text-shadow: -1px 2px black;

  input {
    padding: 5px;
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
`;

export const EndTitle = styled.h1`
  display: inline;
  width: 100%;
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
`;
