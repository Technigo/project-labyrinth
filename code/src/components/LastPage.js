import { CardContainer, StyledButton } from 'GlobalStyles';
import React from 'react';
import { useSelector } from 'react-redux';

// import { maingame } from 'reducers/maingame';

export const LastPage = () => {
  const gameProps = useSelector((store) => store.maingame.gameProps)
  const username = useSelector((store) => store.maingame.username);
  // const dispatch = useDispatch();

  return (
    <CardContainer>
      <p>Well done, {username}</p>
      <p>{gameProps.description}</p>
      <StyledButton onClick={() => window.location.reload(false)}>Restart</StyledButton>

    </CardContainer>

  )
}
