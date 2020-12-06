import styled from "styled-components";

export const Text = styled.p`
  color: #8a2be2;
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 40px;
  font-family: "Major Mono Display", monospace;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 15px;
`;

export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #8a2be2;
  font-size: 28px;
  width: 100%;
`;

export const ButtonText = styled.p`
  font-family: "Major Mono Display", monospace;
  font-size: 18px;
  color: #8a2be2;
  font-size: 20px;
`;
