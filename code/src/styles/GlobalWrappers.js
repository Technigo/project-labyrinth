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
  width: 80%;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 60%
  }
`