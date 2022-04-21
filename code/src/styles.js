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
  justify-content: center;
  overflow-y: scroll;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: #ffffff61;
  padding: 20px 16px;
  border-radius: 15px;
  width: 80%;
  margin-bottom: 5vw;

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 12px 0;
  }

  h5 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    margin: 10px 0;
  }
  label p {
    font-size: 20px;
    font-weight: 500;
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
  margin-bottom: 20px;

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

export const StyledButton = styled.button`
  padding: 8px 18px;
  margin: 3px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #7d553d;
  color: #7d553d;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #7d553d;
    color: #fff;
  }
`;

export const StyledButtonB = styled.button`
  padding: 8px 18px;
  margin: 3px;
  background-color: #7d553d;
  border-radius: 5px;
  border: 1px solid #7d553d;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: #7d553d;
  }
`;

export const StyledAlert = styled.p`
  color: #e11717;
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledMsg = styled.p`
  font-weight: 300;
  font-style: italic;
  margin: 0;
  margin-bottom: 12px;
`;
