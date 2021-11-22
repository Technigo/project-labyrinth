import React from "react"
import { useSelector } from "react-redux"

export const LoadingIndicator = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)

  return <>{isLoading && <div>!! LOADING !!</div>}</>
}
