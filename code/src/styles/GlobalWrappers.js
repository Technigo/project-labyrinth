import styled from 'styled-components/macro';

/* WRAPPERS */
export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const InnerWrapper = styled.div`
  display: flex;
  width: 70%;
  max-width: 500px;
  flex-direction: column;

  @media (min-width: 668px) {

  }

  @media (min-width: 1024px) {
    width: 60%
  }

`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`