import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";
// import { ui } from "./ui";

export const start = createSlice({
  name: "start",
  initialState: {
    startPoint: [{ name: 'hello'}]
  },
  reducers: {
    setStart: (state, action) => {
      state.startPoint = action.payload;
    }
  }
});

export const fetchStart = () => {
    return (dispatch) => {
        // dispatch(ui.actions.setLoading(true));
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: 'Svante'}),
        })
        .then((res) => res.json())
        .then((json) => {
            batch(() => {
                dispatch(start.actions.setStart(json));
                // dispatch(ui.actions.setLoading(false));
                console.log('lets get going')
            })
        });
    };
    };