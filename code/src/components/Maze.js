import Lottie from "react-lottie"
import React from "react"
// import "@lottiefiles/lottie-player"
import { create } from "@lottiefiles/lottie-interactivity"

import animationData from "../lotties/loader"

export const Maze = () => {
  const create = {
    mode: "scroll",
    player: "#firstLottie",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 218],
      },
    ],
  }
  return (
    <div>
      <Lottie options={create} height={400} width={400} />
    </div>
  )
}

// export const Maze = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   }

//   return (
//     <div>
//       <Lottie options={defaultOptions} height={400} width={400} />
//     </div>
//   )
// }
