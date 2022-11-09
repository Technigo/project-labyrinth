import React from 'react';
import styled from 'styled-components/macro';

const ContentWrapper = ({ children }) => {
  const OuterWrapper = styled.div`
    background-color: #fff;
  `;
  const InnerWrapper = styled.div`
    max-width: 940px;
    width: 90%;
    min-height: 100vh;
    margin: 0 auto;
    background-color:#fff;
    display: flex;
    flex-direction: column;
    @media (min-width: 667px) and (max-width: 1024px) {
      width: 75%;
    }
    @media (min-width: 1025px) {
      width: 75%;
    }
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
};

export default ContentWrapper;