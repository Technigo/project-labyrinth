import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const Labyrinth = createSlice({
  name: "labyrinth",
  initialState: {
    Labyrinth: [ {username: ""} ]
  },

  reducers: {
    setLabyrinth: (state, action) => {
      state.Labyrinth = action.payload;
    }
  }
});

export default Labyrinth;

export const fetchLabyrinth = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: "jess" })
    };

    fetch("https://wk16-backend.herokuapp.com/start", config).then((json) => {
      dispatch(Labyrinth.actions.setLabyrinth(json));
      dispatch(ui.actions.setLoading(false));
    });
  };
};
