import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Image = styled.img`
  filter: grayscale(100%);
  width: 150px;
`;

const Loading = () => {
  return (
    <PageWrapper>
      <Image src="/assets/gif.webp" alt="Loading" />
    </PageWrapper>
  );
};

export default Loading;
