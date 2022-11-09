import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'

// import thunk 2
// import globalstyles
export const GamePage = () => {
  // const position = useSelector((store) => store.labyrinth.position)
  // const dispatch = useDispatch()

  return (
    <ConsoleWrapper>
      <h2> här ska vi stoppa in allt i konsollen</h2>
    </ConsoleWrapper>
  )
}

// ----------Styled Components---------

const ConsoleWrapper = styled.h2`
  font-family: var(-font-exp);
  border: 2px solid hotpink;
`;
