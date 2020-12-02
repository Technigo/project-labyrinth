import React from "react";
import { useSelector } from "react-redux";

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.game.isLoading)

  console.log(isLoading)

  return (
    <>
      {isLoading && <div>Loading...</div>}
    </>
  )
}
