import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = ({ children }) => {
  const OuterWrapper = styled.div`
    display: grid;
  `
  const InnerWrapper = styled.div`
    min-height: 100vh;
    margin: 0 auto;
    justify-content: center;

  `

  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
}

export default Wrapper;