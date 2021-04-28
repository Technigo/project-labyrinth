import React from 'react';

import { TypoText } from 'components/Typography';
import { Wrapper, Spinner } from './style';

export default () => {
  return (
    <Wrapper>
      <TypoText>Loading</TypoText>
      <Spinner />
      <Spinner />
      <Spinner />
    </Wrapper>
  );
};
