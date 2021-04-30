import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callAPI } from 'store/thunks';
import Button from 'components/reusables/Button';
import { TypoText } from 'components/reusables/Typography';

export default () => {
  const dispatch = useDispatch();
  const selectedAction = useSelector((store) => store.room.actions.selected);
  const userid = useSelector((store) => store.game.user.id);

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
    <>
      {selectedAction.description ? (
        <>
          <TypoText>{selectedAction.description}</TypoText>
          <Button type="button" onClick={() => handleGoTo()}>
            Go there
          </Button>
        </>
      ) : (
        <TypoText>Please select a direction</TypoText>
      )}
    </>
  );
};
