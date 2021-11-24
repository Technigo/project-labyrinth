import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  max-height: 300px;
  height: 300px;
  flex-direction: column;
  color: #3f3e3e;
  width: 300px;
  font-size: 14px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  padding: 20px;
  @media (min-width: 768px) {
    font-size: 22px;
    width: 600px;
    padding: 40px;
    max-height: 600px;
    height: 500px;
  }
`;
