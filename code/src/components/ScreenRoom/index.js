import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setState } from 'store/game';
import { callAPI } from 'store/thunks';

import { TypoText } from 'components/Typography';
// import Input from 'components/InputText';
import Section from 'components/Section';
import Button from 'components/Button';
import ActionCompass from 'components/ActionCompass';

export default () => {
  const dispatch = useDispatch();
  const [selectedAction, setAction] = useState(null);
  const userid = useSelector((store) => store.game.user.id);
  const room = useSelector((store) => store.room.currentRoom);

  const handleGoTo = () => {
    dispatch(
      callAPI('action', {
        username: userid,
        type: 'move',
        direction: selectedAction.direction
      })
    );
  };

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
          <TypoText>{selectedAction.description}</TypoText>
          <Button type="button" onClick={() => handleGoTo()}>
            Go there
          </Button>
        </>
      )}
    </Section>
  );
};
