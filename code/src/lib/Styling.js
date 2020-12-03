import styled from "styled-components/macro";

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const Title = styled.h1`
  font-family: 'Texturina', serif;
  font-size: 40px;
  margin: 0;
`

export const Text = styled.p`
  margin: 10px 0;
`

export const SmallText = styled(Text)`
  margin: 0;
  font-size: 12px;
`;