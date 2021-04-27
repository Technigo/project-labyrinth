import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { setUserID } from 'store/game';

import { TypoText } from 'components/Typography';
// import Input from 'components/InputText';
import Section from 'components/Section';
import Button from 'components/Button';
import ActionCompass from 'components/ActionCompass';

export default () => {
  const [actionActive, setActiveAction] = useState(null)

  return (
    <Section>
      <TypoText>
        You find yourself in under a large archway opening into a cavern. A sense of
        purpose fills you.
      </TypoText>
      <TypoText>
        What would you like to do?
      </TypoText>
      <ActionCompass setActiveAction={setActiveAction} />
      {actionActive && (
        <>
        <TypoText>{actionActive} description</TypoText>
        <Button type="button">Go there</Button>
        </>
      )}
    </Section>
  );
};
