import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setState } from 'store/game';

import { TypoText } from 'components/Typography';
// import Input from 'components/InputText';
import Section from 'components/Section';
import Button from 'components/Button';
import ActionCompass from 'components/ActionCompass';
import FolderTabs from 'components/FolderTabs';

export default () => {
  const dispatch = useDispatch();
  const [selectedAction, setAction] = useState(null);
  const room = useSelector((store) => store.room.currentRoom);

  return (
    <Section>
      <TypoText>{room.description}</TypoText>
      <TypoText>What would you like to do?</TypoText>
      {room.actions.length > 0 ? (
        <ActionCompass setAction={setAction} />
      ) : (
        <Button type="button" onClick={() => dispatch(setState('End'))}>
          Continue on...
        </Button>
      )}
      {selectedAction && (
        <>
          <FolderTabs selectedAction={selectedAction} />
        </>
      )}
    </Section>
  );
};
