import React from "react"
import { useSelector } from "react-redux"
// import styled from "styled-components"
import { Circular } from "styled-loaders-react"
import { ui } from "../reducers/ui"

export const Loader = () => {
  const loading = useSelector((state) => state.ui.loading)

  return (
    <div>
      {loading ? (
        <Circular color="red" size="60px" duration="5s" />
      ) : (
        "Your Content"
      )}
    </div>
  )
}
