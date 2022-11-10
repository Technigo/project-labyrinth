/* eslint-disable */
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { game, playerAction } from 'reducers/quotes';

// const Actions = () => {
//   const dispatch = useDispatch()

//   const coordinates = useSelector((store) => store.game.coordinates)
//   const actions = useSelector((store) => store.game.actions.action)
//   console.log(coordinates)

//   const chooseDirection = () => {
//     dispatch(playerAction())
//   }

//   const gobackbtn = () => {
//     dispatch(game.actions.setPrevious())
//   }

//   return (
//     <>
//       <button onClick={() => gobackbtn()} type="button">Go Back</button>
//       {actions.map((action) => <button type="button" onClick={chooseDirection}>
//           DIRECTION {action.direction}
//       </button>)}
//     </>
//   )
// }

// export default Actions;

// const coordinates = useSelector((store) => store.game.coordinates)

// const chooseDirection = () => {
//   dispatch(game.actions.setType(action.type))
//   dispatch(game.actions.setDirection(action.direction))
//   dispatch(playerAction())
// }

// {actions.map((action) => (
//   <button type="button" key={action.direction} onClick={chooseDirection}>
//     {action.direction}
//   </button>