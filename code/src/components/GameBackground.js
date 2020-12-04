// import React from 'react'
// import { useSelector } from 'react-redux'
// import { GameContainer } from '../lib/Containers'

// import { 
//   imgUrl_00,
//   imgUrl_10,
//   imgUrl_11,
//   imgUrl_01,
//   imgUrl_02,
//   imgUrl_03,
//   imgUrl_13,
//   imgUrl_start
//  } from '../lib/ImageUrls'

// export const GameBackground = () => {
//   const gameData = useSelector(state => state.game.all.data)
//  console.log(gameData)
//   if (!gameData) {
//     return (
//       <GameContainer backgroundImage={imgUrl_start} />
//     )
//   } else if (gameData.coordinates === "0,0") {
//     return (
//       <GameContainer backgroundImage={imgUrl_00}/>
//     )
//   } else if (gameData.coordinates === "1,0") {
//     return (
//       <GameContainer backgroundImage={imgUrl_10}/>
//     )
//   } else if (gameData.coordinates === "1,1") {
//     return (
//       <GameContainer backgroundImage={imgUrl_11}/>
//     )
//   } else if (gameData.coordinates === "0,1") {
//     return (
//       <GameContainer backgroundImage={imgUrl_01}/>
//     )
//   } else if (gameData.coordinates === "0,2") {
//     return (
//       <GameContainer backgroundImage={imgUrl_02}/>
//     )
//   } else  if (gameData.coordinates === "0,3") {
//     return (
//       <GameContainer backgroundImage={imgUrl_03}/>
//     )
//   } else if (gameData.coordinates === "1,3") {
//     return (
//       <GameContainer backgroundImage={imgUrl_13}/>
//     )
//   } else return (
//       <GameContainer backgroundImage={imgUrl_00} />
//     )
// }
