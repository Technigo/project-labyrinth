import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = ({ children }) => {
  const OuterWrapper = styled.div`
    display: grid;
  `
  const InnerWrapper = styled.div`
    max-width: 940px;
    width: 90%;
    min-height: 100vh;
    margin: 0 auto;

    justify-content: center;
    @media (min-width: 667px) and (max-width: 1024px) {
      width: 75%;
    }
    @media (min-width: 1025px) {
      width: 75%;
    }

  `

  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
}

export default Wrapper;