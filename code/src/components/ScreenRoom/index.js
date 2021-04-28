import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { setUserID } from 'store/game';

import { TypoText } from 'components/Typography';
// import Input from 'components/InputText';
import Section from 'components/Section';
import Button from 'components/Button';
import ActionCompass from 'components/ActionCompass';

export default () => {
  const [actionActive, setActiveAction] = useState(null)
  const room = useSelector((store) => store.room.currentRoom)

  return (
    <Section>
      <TypoText>
        {room.description}
      </TypoText>
      <TypoText>
        What would you like to do?
      </TypoText>
      <ActionCompass setActiveAction={setActiveAction} />
      {actionActive && (
        <>
        <TypoText>{actionActive}</TypoText>
        <Button type="button">Go there</Button>
        </>
      )}
    </Section>
  );
};
