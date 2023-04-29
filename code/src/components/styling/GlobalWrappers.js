import styled from 'styled-components/macro';
import background from '../../assets/background.jpg';

/* WRAPPERS */
export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 100vh;
`;
export const InnerWrapper = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  height: auto;
  background: #fff;
  margin: 40px;
  padding: 30px;
  border-radius: 25px;
  opacity: 80%;

  @media (min-width: 668px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;
