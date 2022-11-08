// IMPORTERAR IN FRÅN NINAS TODO STARTSTATE
// import React, { useState } from 'react'
// import styled from 'styled-components/macro'

// import { AddStartIcon, OuterWrapper, StartBtn } from 'GlobalStyle'

// import startBtn from '../assets/addlist_icon.png'

// // Components
// import { TodoList } from './TodoList'

// export const StartState = () => {
//   const [startTodo, setStartTodo] = useState(false)

//   const onStartAdding = () => { setStartTodo(true) }

//   return (
//     <>
//       {startTodo && <TodoList />}
//       {!startTodo && (
//         <OuterWrapper>
//           <StartStateText>
//           Click &quot;add to do&quot; below, make a list and be productive! {' '}
//           </StartStateText>
//           <ImageWrapper>
//             <StartBtn onClick={onStartAdding}>
//               <AddStartIcon src={startBtn} alt="start adding Todos" />
//             </StartBtn>
//           </ImageWrapper>
//           <BottomText>
//           psst! or just take a coffee break!{' '}
//           </BottomText>
//         </OuterWrapper>
//       )}
//     </>
//   )
// }

// // ----------Styled Components---------

// const StartStateText = styled.p`
//   font-size: 2rem;
//   font-weight: 700;
//   margin: 0;
//   padding: 1em 2em 2em;
//   text-align: center;
//   max-width: 30ch;
//   align-self: center;
//   letter-spacing: 1.5px;
//   line-height: 1.4em;
// `;

// const BottomText = styled(StartStateText)`
//   font-family: var(--font-todo);
//   font-size: 1.5rem;
//   padding-top: 2em;
// `;

// const ImageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
