import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = ({ children }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
}

export default Wrapper;
const OuterWrapper = styled.div`
display: grid;
`
const InnerWrapper = styled.div`
min-height: 100vh;
width: 300px;
margin: 0 auto;
justify-content: center;
text-align: center;
`