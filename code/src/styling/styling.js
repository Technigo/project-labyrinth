import styled from "styled-components/macro";



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
`;

export const Button = styled.button`
  background: #0d71b9;
  border-radius: 5px;
  padding-bottom: 5px;
  color: #fff;
  font-size: 20px;
  font-family: "Texturina", serif;
`;
export const Text = styled.h2`
  font-size: 25px;
`;

export const TextContainer = styled.section`
  background: #000000;
  color: #ffffff;
  font-size: 16px;
  border-radius: 10px;
  width: 80%;
  padding: 30px;
  opacity: 0.8;
  text-align: center;

  @media (min-width: 667px) {
    width: 50%;
    padding: 10px;
  }

  @media (min-width: 1024px) {
    width: 500px;
  }
`;
