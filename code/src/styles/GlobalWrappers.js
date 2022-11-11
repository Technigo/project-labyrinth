import styled from 'styled-components/macro';

/* WRAPPERS */
export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
`
export const InnerWrapper = styled.div`
  display: flex;
  width: 70%;
  gap: 20px;
  flex-direction: column;
  height: auto;
  margin-top: 5%;

  @media (min-width: 668px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }

`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
`