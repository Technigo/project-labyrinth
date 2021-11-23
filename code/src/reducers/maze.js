import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const maze = createSlice({
    name: "maze",
    initialState: {
      userName: null,
    },
    reducers: {
      setMaze: (state, action) => {
        state.text = action.payload;
      },
      setUserName: (store, action) => {
        store.userName = action.payload;
      }
    }
  });
  
  export const fetchMaze = () => {
    return (dispatch) => {
      dispatch(ui.actions.setLoading(true));
      fetch("https://wk16-backend.herokuapp.com/start")
        .then((res) => res.json())
        .then((json) => {
          dispatch(maze.actions.setCoinList(json));
          dispatch(ui.actions.setLoading(false));
        });
    };
  }