import React from 'react';

import { TypoText } from 'components/reusables/Typography';
import { Wrapper, Spinner } from './style';

export default () => {
  return (
    <Wrapper>
      <TypoText>Walking</TypoText>
      <Spinner />
      <Spinner />
      <Spinner />
    </Wrapper>
  );
};
