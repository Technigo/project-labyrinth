import React from "react"
import { useSelector } from "react-redux"
// import styled from "styled-components"
import { Circular } from "styled-loaders-react"
//import { ui } from "../reducers/ui"

export const Loader = () => {
  const loading = useSelector((state) => state.ui.loading)

  return (
    loading === true && (
      <div>
        <Circular color="red" size="60px" duration="5s" />
      </div>
    )
  )
}

// import React from "react"
// import { useSelector } from "react-redux"
// import styled from "styled-components"
// import { Circular } from "styled-loaders-react"
// //import { ui } from "../reducers/ui"

// const LoadingWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   height: 100vh;
// `

// export const Loader = () => {
//   const loading = useSelector((state) => state.ui.loading)

//   return (
//     loading === true && (
//       <LoadingWrapper>
//         <Circular color="black" size="100px" duration="5s" />
//       </LoadingWrapper>
//     )
//   )
// }
