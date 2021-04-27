import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setUserID } from 'store/game';

import { TypoText } from 'components/Typography';
// import Input from 'components/InputText';
import Section from 'components/Section';
import Button from 'components/Button';

export default () => {
  return (
    <Section>
      <TypoText>
        You find yourself in under a large archway opening into a cavern. A sense of
        purpose fills you.
      </TypoText>
      <TypoText>
        What would you like to do?
      </TypoText>
      <Button type="button">Start Game</Button>
    </Section>
  );
};
