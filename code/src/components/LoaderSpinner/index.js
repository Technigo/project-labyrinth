import React from 'react';

import { TypoText } from 'components/Typography';
import { Wrapper, Spinner } from './style';

export default ({ onAnimEnd }) => {
  return (
    <Wrapper>
      <TypoText>Loading</TypoText>
      <Spinner />
      <Spinner />
      <Spinner onAnimationEnd={() => onAnimEnd(false)} />
    </Wrapper>
  );
};
