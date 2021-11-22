import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { Main } from "./components/Main"
import { Loader } from "./components/Loader"

export const App = () => {
  return (
    <>
      <Provider>
        <Loader />
        <Main />
      </Provider>
    </>
  )
}
