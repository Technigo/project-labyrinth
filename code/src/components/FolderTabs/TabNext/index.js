import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { callAPI } from 'store/thunks';

import Button from 'components/Button';
import { TypoText } from 'components/Typography';

export default ({ selectedAction }) => {
  const dispatch = useDispatch();
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
      <TypoText>{selectedAction.description}</TypoText>
      <Button type="button" onClick={() => handleGoTo()}>
        Go there
      </Button>
    </>
  );
};
